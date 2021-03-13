import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styles from '../styles/login.module.css';
import {Redirect} from 'react-router-dom';
import { LoginForm } from '../components/index.js';
import { getToken, getMessage, isCheckingLogin } from '../redux/selector.js';
import { onLogin } from '../redux/action.js';

const Login = ({ onLogin, token, isCheckingLogin }) => {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    console.log(token);
    if (token) setRedirect(true);
  }, [token, setRedirect]);

  const handleLogin = (username, password) => {
    onLogin(username, password);
  }
  if (redirect) return (<> <Redirect to="/" /> </>);
	return(
		<div className={styles.body} >
			<LoginForm 
       onCancel={() => setRedirect(true)}
        onLogin={(username, password)=> handleLogin(username, password)}
        isCheckingLogin={isCheckingLogin}
    />
		</div>
	)
}

const mapStateToProps = state => ({
  token: getToken(state),
  isCheckingLogin: isCheckingLogin(state),
})

const mapDispatchToProps = dispatch => ({
  onLogin: (username, password) => dispatch(onLogin(username, password)),
})

const connectLogin = connect(mapStateToProps, mapDispatchToProps)(Login)

export default connectLogin;
