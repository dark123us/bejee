import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom';
import { LoginForm, Messages } from '../components/index.js';
import { getToken, getMessage, isCheckingLogin } from '../redux/selector.js';
import { onLogin, closeMessage, showLoginForm } from '../redux/action.js';

const Login = ({ onLogin, token, isCheckingLogin, message, 
    onCloseMessage, showLoginForm 
}) => {
    
    const [redirect, setRedirect] = useState(false);
    showLoginForm(false);
    useEffect(() => {
        if (token) setRedirect(true);
    }, [token, setRedirect]);
    const handleLogin = (username, password) => {
        onLogin(username, password);
    }
    if (redirect) return (<> <Redirect to="/" /> </>);
    return(
        <div className="container">
            <div className="center-position" >
                <LoginForm 
                    onCancel={() => setRedirect(true)}
                    onLogin={(username, password)=> handleLogin(username, password)}
                    isCheckingLogin={isCheckingLogin} />
            </div>
            <Messages data={message} onClose={ msg => onCloseMessage(msg)}/>
        </div>
    )
}

const mapStateToProps = state => ({
    token: getToken(state),
    message: getMessage(state),
    isCheckingLogin: isCheckingLogin(state),
})

const mapDispatchToProps = dispatch => ({
    onLogin: (username, password) => dispatch(onLogin(username, password)),
    onCloseMessage: message => dispatch(closeMessage(message)),
    showLoginForm: () => dispatch(showLoginForm(false)),
})

const connectLogin = connect(mapStateToProps, mapDispatchToProps)(Login)

export default connectLogin;
