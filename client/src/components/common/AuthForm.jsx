import React, { Component } from 'react';

class AuthForm extends Component {
    constructor(props) {
        super(props);
        
        let obj = {};
        obj.children = [];
        obj.fields = [];
        obj.errors= {};
        obj.requiredErrs = [];

        React.Children.forEach(this.props.children, (child) => {
            obj[child.props.name] = '';
            obj.children.push(child);
            obj.fields.push(child.props.name);
            obj.errors[child.props.name] = null;
        });

        this.state = obj;
        

        this.change = this.change.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    change(e, name) {
        let value = e.target.value;
        let data = {};
        data[name] = value;
        this.setState(data);
    }

    onSubmit(e) {
        e.preventDefault();
        let data = {};
        let { fields } = this.state;
        let state = this.state;

        for (let field of fields) {
            data[field] = state[field];
        }

        this.props.sendData(data);
    }

    render() {
        // console.log(this.state);
        return (
            <React.Fragment>
                  <section className="login_box_area section_gap">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<div className="login_box_img">
						<img class="img-fluid" src="img/login.jpg" alt="" />
						<div class="hover">
							<h4>New to our website?</h4>
							<p>There are advances being made in science and technology everyday, and a good example of this is the</p>
							<a class="primary-btn" href="registration.html">Create an Account</a>
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="login_form_inner">
						<h3>{this.props.formTitle}</h3>
                        <Errors requiredErrs={this.state.requiredErrs} />
						<form class="row login_form" onSubmit={this.onSubmit} id="contactForm" novalidate="novalidate">
                        {
                                        this.state.children.map((child, i) => {
                                            return (
                                                (
                                                    <FormRow props={child.props} change={this.change} key={i} id={child.props.name + i} error={this.state.errors[child.props.name]}/>
                                            )
                                            )
                                        }
                                            
                                             
                                        )
                                    }
						
							<div class="col-md-12 form-group">
								<button type="submit" value="submit" class="primary-btn">Sign Up</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
            </React.Fragment>
        )
    }
}

const FormRow = (props) => {
    let { change: onChangeEvent, error} = props;
    let { type, name, title } = props.props;
    
    // console.log(error);
    return (

            <div class="col-md-12 form-group">
								<input type={type} class="form-control" id={name} name={name} placeholder={title}  onChange={(e) => onChangeEvent(e, name)}/>
                                {error === null ? <small className="text-danger">Error</small> : null}
							</div>
       
    )
}

const Errors = (props) => {
    let { requiredErrs } = props;

    
    if(requiredErrs) {
        return requiredErrs.map(err => (
            <div class="alert alert-danger">{err}</div>
        ))
    }

    return null;
}



export default AuthForm;