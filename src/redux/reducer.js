import { 
  TOKEN, 
  PAGE, 
  TASKS, STATE, STATES,
  TASKS_ON_PAGE, SORT,
} from './constant.js';

import { 
  TASK_CREATING,
  TASK_LOADING,
  TASK_LOAD_SUCCESS,
  TASK_CREATE_SUCCESS,
  SELECT_PAGE, 
  CHECK_LOGIN,
} from './actiontype.js';

import { getToken } from './service.js';

const initialState = {
  [SORT]: {direction: true, field: 'id' },
  [PAGE]: {current: 1, count:1},
  [TASKS]: [  ],
  [STATE]: STATES.UNDEFINED,

}

const main = (state = initialState, action) => {
  switch (action.type){
    case TASK_CREATING:
      return { ...state,
        [STATE]: STATES.TASK_CREATING,
      };
    case TASK_LOADING:
      return { ...state,
        [STATE]: STATES.TASK_LOADING,
      };
    case TASK_LOAD_SUCCESS:
      const {tasks, total_task_count} = action.payload;
      const count = ((+total_task_count -1) / TASKS_ON_PAGE | 0 ) + 1;
      return { ...state,
        [TASKS]: tasks,
        [STATE]: STATES.DONE,
        [PAGE]: {
          current: (state[PAGE].current <= count)? state[PAGE].current: count,
          count
        },
      };
    case TASK_CREATE_SUCCESS:
      return { ...state,
        [STATE]: STATES.DONE,
      };
    case SELECT_PAGE:
      const {page} = action.payload;
      return { ...state,
        [PAGE]: {...state[PAGE], current:page}
      };
    case CHECK_LOGIN:
      return { ...state, 
        [TOKEN]: getToken()
      };
		default:{
			return state;
		}
	}
};

export default main;
