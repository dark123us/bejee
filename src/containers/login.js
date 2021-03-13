import React from "react";
import { connect } from "react-redux";
import { LoginForm } from '../components/index.js';
import styles from '../styles/login.module.css';

const Login = ({ }) => {
	return(
		<div className={styles.body} >
			<LoginForm />
		</div>
	)
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

const connectLogin = connect(mapStateToProps, mapDispatchToProps)(Login)

export default connectLogin;
