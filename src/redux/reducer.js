import { PAGE, STATE } from './constant.js';
import { BEGIN_CREATE_TASK, CREATE_TASK } from './actiontype.js';

const initialState = {
	[PAGE]: {current: 1, count:1},
	[STATE]: undefined

}

const main = (state = initialState, action) => {
	switch (action.type){
		case BEGIN_CREATE_TASK:
			const task = action.payload;
			return { ...state,
				[TASKS]: task,
			};
		case BEGIN_CREATE_TASK:
			return { ...state,
				[STATE]: STATES.BEGIN_CREATE,
			};
		default:{
			return state;
		}
	}
};

export default main;
