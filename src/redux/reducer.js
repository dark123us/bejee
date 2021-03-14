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
  TASK_SAVE_SUCCESS,
  SELECT_PAGE, 
  CHECKING_LOGIN, SET_TOKEN,
  CHANGE_SORT_ORDER, CHANGE_SORT_FIELD,
} from './actiontype.js';

const initialState = {
  [SORT]: {direction: true, field: 'id' },
  [PAGE]: {current: 1, count:1},
  [TASKS]: [  ],
  [STATE]: STATES.UNDEFINED,
  [TOKEN]: null
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
    case TASK_SAVE_SUCCESS:
      const { task, newtext, newstatus } = action.payload;
      const prevTask = [...state[TASKS]];
      prevTask.filter( t => t.id === task.id).forEach(t => {
        t.text = newtext;
        t.status = newstatus;
      });
      return { ...state,
        [TASKS]: prevTask
      }
    case SELECT_PAGE:
      const {page} = action.payload;
      return { ...state,
        [PAGE]: {...state[PAGE], current:page},
      };
    case CHECKING_LOGIN:
      return { ...state,
        [STATE]: STATES.CHECKING_LOGIN,
      }
    case SET_TOKEN:
      const { token } = action.payload;
      return { ...state, 
        [TOKEN]: token
      };
    case CHANGE_SORT_ORDER:
      return { ...state, 
        [SORT]: { ...state[SORT], direction: !state[SORT].direction }
      };
    case CHANGE_SORT_FIELD:
      const { field } = action.payload;
      return { ...state,
        [SORT]: { direction: true, field }
      };
		default:{
			return state;
		}
	}
};

export default main;
