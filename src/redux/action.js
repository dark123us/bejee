import { 
    CHECKING_LOGIN, SET_TOKEN,
    SELECT_PAGE, SHOW_MESSAGE, CLOSE_MESSAGE,
    TASK_LOADING, TASK_LOAD_SUCCESS, 
    TASK_SAVING, TASK_SAVE_SUCCESS,
    TASK_CREATING, TASK_CREATE_SUCCESS,
    CHANGE_SORT_ORDER, CHANGE_SORT_FIELD,
} from "./actiontype.js";

import { getToken, setToken, clearToken, api } from './service.js';
import { getParamsRequestLoadTasks, getFieldSort } from './selector.js';

export const showError = message => ({type: SHOW_MESSAGE, payload: {message, type:'error'}});
export const showMessage = message => ({type: SHOW_MESSAGE, payload: {message, type:'success'}});
export const closeMessage = message => ({type: CLOSE_MESSAGE,  payload: {message}});

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
        dispatch(showMessage("Logout"));
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
            dispatch(showMessage("Access granted"));
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
export const createTask = ({username, email, text}) => {
    return async (dispatch, getState) => {
        dispatch({type: TASK_CREATING});
        const res = await api({
            command: "create", 
            method: "POST", 
            formParams: {username, email, text},
        });
        if (res.ok){
            dispatch({type: TASK_CREATE_SUCCESS, payload: res.message});
            dispatch(showMessage("Task created"));
            dispatch(loadTasks());
        } else {
            dispatch(showError(res.message));
        }
    }
}
export const editTask = ({task, newtext, newstatus}) => {
    return async (dispatch, getState) => {
        dispatch({type: TASK_SAVING});
        const token = getToken();
        if (!token) {
            dispatch(showError("Токен истёк"));
            return;
        }
        const res = await api({
            command: "edit/" + task.id, 
            method: "POST", 
            formParams: {text: newtext, status:newstatus, token},
        });
        
        if (res.ok){
            dispatch( {type: TASK_SAVE_SUCCESS, payload: {task, newtext, newstatus}} );
            dispatch(showMessage("Task changed"));
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
export const onSortBy = (field) => {
    return (dispatch, getState) => {
        if ( field === getFieldSort(getState()) ){
            dispatch({type: CHANGE_SORT_ORDER})
        } else {
            dispatch({ type: CHANGE_SORT_FIELD, payload:{field} });
            
        }
        dispatch(loadTasks());
    }
}

