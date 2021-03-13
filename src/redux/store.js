import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const configureStore = (initialState) => {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	return createStore(reducer, initialState, composeEnhancers( applyMiddleware(thunk) ))
}
export default configureStore;
