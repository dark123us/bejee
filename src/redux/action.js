import { CREATE, EDIT, 
  CHECK_LOGIN, LOGIN, 
  CHANGE_STATE,
  SELECT_PAGE, ERROR,
  TASK_LOADING, TASK_LOAD_SUCCESS, TASK_LOAD_FAIL,
  TASK_CREATING, 
} from "./actiontype.js";

import {
  DEVELOPER, SITE, URI,
} from "./constant.js";

import { getParamsRequestLoadTasks } from './selector.js';

export const checkLogin = () => ({type: CHECK_LOGIN });
//export const createTask = (name, email, text) => ({type: CREATE, payload:{name, email, text}}) ;
export const selectPage = current => ({type: SELECT_PAGE, payload: {current} });
export const showError = error => ({type: ERROR, payload: {error}});

export const createTask = (name, email, text) => {
  return async (dispatch, getState) => {
    dispatch({type: TASK_CREATING});
    try {
      const url = SITE + URI +"create?"+ new URLSearchParams({
        developer: DEVELOPER,
      });
      const formData = new FormData();
      //formData.append("username", name);
      //formData.append("email", email);
      //formData.append("text", text);

      formData.append("username", "Example");
              formData.append("email", "example@example.com");
              formData.append("text", "Some text");

      const options = {
        mode:'cors', 
        method:'POST', 
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      const response = await fetch(url, options);
      if (response.ok){
        const res = await response.json();
        if (res.status === 'ok'){
          dispatch({type: TASK_LOAD_SUCCESS, payload: res.message});
        } else {
          showError(res.message);
        }
      }
    } catch (e){
      console.error(e);
      const msg = 'Что-то пошло не так';
      showError(msg);
    }
    return 'done';
  }
}

export const loadTasks = () => {
  return async (dispatch, getState) => {
    const { sortField, sortDirection, page } = getParamsRequestLoadTasks( getState() );
    console.log(sortField, sortDirection, page);
    dispatch({type: TASK_LOADING});
    try {
      const response = await fetch(SITE + URI +"?"+ new URLSearchParams({
        developer: DEVELOPER,
        sort_field: sortField,
        sort_direction: sortDirection?"asc":"desc",
        page: 1
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
      console.error(e);
      const msg = 'Что-то пошло не так';
      showError(msg);
      dispatch({type: TASK_LOAD_FAIL, payload: msg});
      //throw new Error('Что-то пошло не так');
    }
    return 'done';
  }
}

// export const _createTask = (name, email, text) => {a
//   return async dispatch => {
//     dispatch(beginUnregister());
//     try {
//       const response = await fetch('/api/logout', {method: 'POST'});
//       if (response.ok){
//         dispatch(unregister());
//       } else if (response.status === 401) {
//         
//         const data = await response.json();
//         dispatch(handleError( data.error ));
//       } else {
//         const data = await response.json();
//         throw new Error(data.message || 'Что-то пошло не так');
//       }
//     }catch (e){
//       console.error(e);
//       dispatch(handleError(e));
//     }
//     return 'done';
//   }
// }
// 
