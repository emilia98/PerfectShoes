import React, { Component } from 'react';
import { NotificationManager } from 'react-notifications';
import { withRouter } from 'react-router-dom';

class UniversalForm extends Component {
    constructor(props) {
        super(props);

        let obj = {};
        obj.children = [];
        obj.fields = [];
        obj.errors = {};
        obj.id = this.props.id;
        obj.validations = {};

        React.Children.forEach(this.props.children, (child) => {
            obj[child.props.name] = child.props.defaultValue ? child.props.defaultValue : "";
            obj.children.push(child);
            obj.fields.push(child.props.name);

            obj.validations[child.props.name] = child.props.validateFunc;
            obj.errors[child.props.name] = null;
        });

        this.state = obj;

        
        this.change = this.change.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.sendData = this.sendData.bind(this);
    }

    change(e, name) {
        let value = e.target.value;
        let data = {};
        data.errors = {};
        data[name] = value;
        data.errors[name] = this.state.validations[name](value)
        this.setState(data);
        // console.log();
    }

    sendData(data, id) {
        this.props.service(data, id)
        .then(response => {
            return response.json();
        })
        .then(data => {
            if(data.errors) {
                return this.setState({
                    errors: data.errors
                })
            }

            if(data.hasError) {
                return NotificationManager.error(data.msg);
            }
            
            NotificationManager.success(data.msg);
            this.props.history.push(this.props.redirectTo);
        })
        .catch(err => {
            console.log(err);
            
            NotificationManager.error('Error');
        })
    }

    onSubmit(e) {
        e.preventDefault();
        let data = {};
        let { fields } = this.state;
        let state = this.state;

        for (let field of fields) {
            data[field] = state[field];
        }
        
        console.log(data);
        this.sendData(data, this.state.id);
    }

    render() {
        return (
            <React.Fragment>

                <div className="row custom-form">
                    <div className="col-lg-6 admin-form">
                        <div className="card">
                            <div className="card-header">
                                <h1>{this.props.title}</h1>
                            </div>
                            <div className="card-body card-block">
                                <form onSubmit={this.onSubmit} encType="multipart/form-data" className="form-horizontal">
                                <Errors errors={this.state.errors}/>
                                    {
                                        this.state.children.map((child, i) => {
                                            let { name } = child.props;
                                            let defaultValue = this.state[name];
                                            
                                            return (
                                                <FormRow props={child.props} change={this.change} key={i} id={child.props.name + i} defaultValue={defaultValue} error={this.state.errors[name]}/>
                                        )
                                        })
                                    }
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-success btn-lg custom-btn">
                                            Create
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const FormRow = (props) => {
    let { change: onChangeEvent, defaultValue, error} = props;
    let { type, name, title } = props.props;

    return (
        <div className="row form-group form-item">
            <div className="col col-md-3">
                <label htmlFor="text-input" className="form-control-label">{title}</label>
            </div>
            <div className="col-12 col-md-9">
                <input type={type} id="text-input" name={name} placeholder={title} className="form-control" onChange={(e) => onChangeEvent(e, name)} value={defaultValue}/>
                {
                    error === null ? null: <small className="text-danger">{ error}</small>
                }
                
            </div>
        </div>
    )
}


const Errors = (props) => {
    let { errors } = props;
/*
    if(errors) {
        return errors.map(err => (
            <div class="alert alert-danger-custom">{err}</div>
        ))
    }*/
    return null;
}

export default withRouter(UniversalForm);