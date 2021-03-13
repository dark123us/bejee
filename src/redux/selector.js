import { TOKEN, PAGE, TASKS,  MESSAGE, SORT } from './constant.js';

export const getToken = state => { return state[TOKEN] };
export const getMessage = state => {return state[MESSAGE] };
export const getTasks = state => {return state[TASKS] };
export const getPagination = state => {return state[PAGE] };
export const getParamsRequestLoadTasks = state => ({
  sortField: state[SORT].field,
  sortDirection: state[SORT].direction,
  page: state[PAGE].current,
})
