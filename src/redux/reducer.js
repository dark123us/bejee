import { 
  TOKEN, 
  PAGE, 
  TASKS, STATE, STATES,
  TASKS_ON_PAGE, SORT,
} from './constant.js';

import { 
  TASK_LOAD_SUCCESS,
  CREATE, SELECT_PAGE, 
  EDIT, CHANGE_STATE, LOGIN, CHECK_LOGIN 
} from './actiontype.js';

import { getToken } from './service.js';

const initialState = {
  [SORT]: {direction: true, field: 'id' },
  [PAGE]: {current: 1, count:1},
  [STATE]: undefined,
  [TASKS]: [
    {name: 'name1', email: 'email1@email1.com', text: 'javascript: alert(1)'},
    {name: 'name2', email: 'email2@email1.com', text: 'jds fsadf kdfh '},
  ]

}

const main = (state = initialState, action) => {
  switch (action.type){
    case TASK_LOAD_SUCCESS:
      const {tasks, total_task_count} = action.payload;
      const count = (+total_task_count / TASKS_ON_PAGE | 0 ) + 1;
      return { ...state,
        [TASKS]: tasks,
        [PAGE]: {
          current: (state[PAGE].current <= count)? state[PAGE].current: count,
          count
        },
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
		case CREATE:
			const {name, email, text} = action.payload;
      const pages = (state[TASKS].length  / TASKS_ON_PAGE | 0) + 1;
			return { ...state,
				[TASKS]: [...state[TASKS], {name, email, text}],
        [PAGE]: {
          current: pages, count:pages }
			};
		case CHANGE_STATE:
			return { ...state,
				[STATE]: STATES.BEGIN_CREATE,
			};
		default:{
			return state;
		}
	}
};

export default main;
