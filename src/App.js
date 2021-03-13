import React, {lazy, Suspense, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from "react-redux";
import { checkLogin } from './redux/action.js';
import './App.css';
const Main = lazy( () => import('./containers/main'));
const Login = lazy( () => import('./containers/login'));

const App = ({ checkLogin }) => {
	useEffect(()=>{
		checkLogin();
	},[ checkLogin ])
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
    checkLogin: () => dispatch(checkLogin()),
})

const connectApp = connect(mapStateToProps, mapDispatchToProps)(App)



export default connectApp;
