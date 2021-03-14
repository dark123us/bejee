import { TOKEN, PAGE, TASKS,  MESSAGE, SORT, STATE, STATES, SHOW_LOGIN } from './constant.js';

export const getToken = state => { return state[TOKEN] };
export const getMessage = state => {return state[MESSAGE] };
export const getTasks = state => {return state[TASKS] };
export const getPagination = state => {return state[PAGE] };
export const getParamsRequestLoadTasks = state => ({
    sortField: getFieldSort(state),
    sortDirection: state[SORT].direction,
    page: state[PAGE].current,
});

export const isCheckingLogin = state => state[STATE] === STATES.CHECK_LOGIN;
export const getFieldSort = state => state[SORT].field;
export const getSortBy = state => ({
    field: state[SORT].field, 
    direction: state[SORT].direction
});
export const getStateLoading = state => 
    state[STATE] === STATES.TASK_LOADING || state[STATE] === STATES.TASK_CREATING;
export const isShowLogin = state => state[SHOW_LOGIN]
