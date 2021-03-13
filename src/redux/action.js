import { 
  CHECKING_LOGIN, CHECK_TOKEN, SET_TOKEN,
  SELECT_PAGE, ERROR,
  TASK_LOADING, TASK_LOAD_SUCCESS, TASK_LOAD_FAIL,
  TASK_CREATING, TASK_CREATE_SUCCESS,
  CHANGE_SORT_ORDER, CHANGE_SORT_FIELD,
} from "./actiontype.js";

import { getToken, setToken, clearToken, api } from './service.js';
import { getParamsRequestLoadTasks, getFieldSort } from './selector.js';

export const showError = error => ({type: ERROR, payload: {error}});

export const checkToken = () => {
  return dispatch => {
    const token = getToken();
    dispatch({type: SET_TOKEN, payload: {token}});
  }
}
export const onLogout = () => {
  return dispatch => {
    clearToken();
    dispatch(checkToken());
  }
}

export const onLogin = (username, password) => {
  return async dispatch => {
    dispatch({type: CHECKING_LOGIN});
    const res = await api({
      command: "login",
      method: "POST",
      formParams: {username, password}
    });
    if (res.ok) {
      setToken(res.message.token);
      dispatch(checkToken());
    } else {
      dispatch(showError(res.message));
    }
  }
}

export const selectPage = page => {
  return dispatch => {
    dispatch({type: SELECT_PAGE, payload: {page} });
    dispatch(loadTasks());
  }
}

export const createTask = (username, email, text) => {
  return async (dispatch, getState) => {
    dispatch({type: TASK_CREATING});
    const res = await api({
      command: "create", 
      method: "POST", 
      formParams: {username, email, text},
    });

    if (res.ok){
      dispatch({type: TASK_CREATE_SUCCESS, payload: res.message});
      dispatch(loadTasks());
    } else {
      dispatch(showError(res.message));
    }
  }
}

export const loadTasks = () => {
  return async (dispatch, getState) => {
    const { sortField, sortDirection, page } = getParamsRequestLoadTasks( getState() );
    dispatch({type: TASK_LOADING});
    const res = await api({
      reqParams: {
        sort_field: sortField,
        sort_direction: sortDirection?"asc":"desc",
        page: page
      }
    });
    if (res.ok){
      dispatch({type: TASK_LOAD_SUCCESS, payload: res.message});
    } else {
      dispatch(showError(res.message));
    }
  }
}

export const sortBy = (field) => {
  return (dispatch, getState) => {
    if ( field === getFieldSort(getState()) ){
      dispatch({type: CHANGE_SORT_ORDER})
    } else {
      dispatch({ type: CHANGE_SORT_FIELD, payload:{field} });
    }
    dispatch(loadTasks());
  }
}

