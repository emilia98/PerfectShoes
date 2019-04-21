import React, { Component } from 'react';
import { NotificationManager } from 'react-notifications';
import AuthForm from '../../common/AuthForm';
import AuthService from '../../../services/auth-service';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: null,
            doRerender: false
        }

        this.service = AuthService.signUp;
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(data) {
        this.service(data)
           .then(response => response.json())
           .then(data => {
            console.log(data);
               if(data.requiredErrs || data.hasError) {
                   return this.setState({
                       requiredErrs: data.requiredErrs,
                       errors: data.errors
                       ,doRerender: true
                   })
               }
               
               if(data.hasError) {
                   return NotificationManager.error(data.msg);
               }

               
               

               this.setState({doRerender: false}, () => {
                NotificationManager.success(data.msg);
                this.props.history.push('/signin');
               })
               
           })
           .catch(err => console.log(err))
    }

    render() {
        return (
            <AuthForm formTitle = 'Sign Up To Start Your Journey' sendData={this.onFormSubmit} errors={this.state.errors} requiredErrs={this.state.requiredErrs}>
            <input type="text" name="email" title="Email" checkIfUndefined={checkIfUndefined}/>
            <input type="text" name="username" title="Username" checkIfUndefined={checkIfUndefined}/>
            <input type="password" name="password" title="Password" checkIfUndefined={checkIfUndefined}/>
            <input type="password" name="repeatPass" title="Repeat Password" checkIfUndefined={checkIfUndefined}/>
            </AuthForm>
        )
    }
}


function checkIfUndefined(name, value) {
  /*  if(field === undefined) {
        errors.push(msg)
    }

    return errors;*/
    return true;
}
export default SignUp;