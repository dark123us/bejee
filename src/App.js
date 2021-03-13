import React, {lazy, Suspense, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from "react-redux";
import { checkToken, loadTasks } from './redux/action.js';
import './App.css';
const Main = lazy( () => import('./containers/main'));
const Login = lazy( () => import('./containers/login'));

const App = ({ checkToken, loadTasks }) => {
	useEffect(()=>{
		checkToken();
    loadTasks();
	},[ checkToken, loadTasks ])
	return (
		<Router>
			<div className="App">
				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Route exact  path='/' component={Main} />
						<Route path='/login' component={Login} />
					</Switch>
				</Suspense>
			</div>
		</Router>
	);
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    checkToken: () => dispatch(checkToken()),
    loadTasks: () => dispatch(loadTasks()),
})

const connectApp = connect(mapStateToProps, mapDispatchToProps)(App)



export default connectApp;
