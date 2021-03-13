import { 
  CHECKING_LOGIN, CHECK_TOKEN, SET_TOKEN,
  SELECT_PAGE, ERROR,
  TASK_LOADING, TASK_LOAD_SUCCESS, TASK_LOAD_FAIL,
  TASK_CREATING, TASK_CREATE_SUCCESS,
} from "./actiontype.js";

import {
  DEVELOPER, SITE, URI,
} from "./constant.js";
import { setToken } from './service.js';

import { getParamsRequestLoadTasks } from './selector.js';

export const showError = error => ({type: ERROR, payload: {error}});
export const checkToken = () => ({type: CHECK_TOKEN});

export const selectPage = page => {
  return dispatch => {
    dispatch({type: SELECT_PAGE, payload: {page} });
    dispatch(loadTasks());
  }
}

export const createTask = (username, email, text) => {
  return async (dispatch, getState) => {
    dispatch({type: TASK_CREATING});
    try {
      const url = SITE + URI +"create?"+ new URLSearchParams({
        developer: DEVELOPER,
      });
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("text", text);
      const options = {
        mode: 'cors', 
        method: 'POST', 
        body: formData,
      };
      const response = await fetch(url, options);
      if (response.ok){
        const res = await response.json();
        if (res.status === 'ok'){
          dispatch({type: TASK_CREATE_SUCCESS, payload: res.message});
          dispatch(loadTasks());
        } else {
          showError(res.message);
        }
      }
    } catch (e){
      const msg = 'Что-то пошло не так';
      showError(msg);
    }
    return 'done';
  }
}

export const loadTasks = () => {
  return async (dispatch, getState) => {
    const { sortField, sortDirection, page } = getParamsRequestLoadTasks( getState() );
    dispatch({type: TASK_LOADING});
    try {
      const response = await fetch(SITE + URI +"?"+ new URLSearchParams({
        developer: DEVELOPER,
        sort_field: sortField,
        sort_direction: sortDirection?"asc":"desc",
        page: page
      }), {mode:'cors'});
      if (response.ok){
        const res = await response.json();
        if (res.status === 'ok'){
          dispatch({type: TASK_LOAD_SUCCESS, payload: res.message});
        } else {
          dispatch({type: TASK_LOAD_FAIL, payload: res.message});
        }
      }
    } catch (e){
      const msg = 'Что-то пошло не так';
      showError(msg);
      dispatch({type: TASK_LOAD_FAIL, payload: msg});
    }
    return 'done';
  }
}

export const onLogin = (username, password) => {
  return async dispatch => {
    dispatch({type: CHECKING_LOGIN});
    try {
      const url = SITE + URI +"login?"+ new URLSearchParams({
        developer: DEVELOPER,
      });
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);
      const options = {
        mode: 'cors', 
        method: 'POST', 
        body: formData,
      };
      const response = await fetch(url, options);
      if (response.ok){
        const res = await response.json();
        if (res.status === 'ok'){
          console.log(res.message);
          setToken(res.message.token);
          checkToken();
        } else {
          showError(res.message);
        }
      }
    } catch (e){
      const msg = 'Что-то пошло не так';
      showError(msg);
    }
    return 'done';
  }
}
