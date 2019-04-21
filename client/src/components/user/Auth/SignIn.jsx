import React, { Component } from 'react';
import AuthForm from '../../common/AuthForm';

class SignIn extends Component {
    render() {
        return (
            <AuthForm formTitle = 'Sign In To Continue Your Journey'>
            <input type="text" name="username" title="Username"/>
            <input type="password" name="password" title="Password"/>
            </AuthForm>
        )
    }
}

export default SignIn;