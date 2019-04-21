import React, { Component } from 'react';
import UniversalForm from '../../common/UniversalForm';
import { NotificationManager } from 'react-notifications';
import { withRouter } from 'react-router-dom';
import CategoryService from '../../../services/category-service';


class CategoryNew extends Component {
    constructor(props) {
        super(props);

        this.service = null;

        let obj = { name: '', slug: '', type: null};

        obj.errors = {
          name: null,
          slug: null,
          type: null
        }

        obj.requiredErrs = [];

        obj.validations = {};

        obj.validations.name = validateName;
        obj.validations.slug = validateSlug;

        this.state = obj;

        
        this.change = this.change.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.select = this.select.bind(this);
    }

    select(options) {
      let type = null;
      let obj = {};
      obj.errors = this.state.errors;

      if(options && options.length > 0) {
        type = options[0].value;
      }

      obj.type = type;

      if(type !== '1' && type !== '0') {
       
        obj.errors.type = 'The type should be either 0 or 1!';
        obj.type = null
      } else {
        obj.errors.type = null;
      }

      this.setState(obj)
    }

    change(e, name) {
      let value = e.target.value;
      let data = {};
      data.errors = this.state.errors;
      data[name] = value;
      data.errors[name] = this.state.validations[name](value)
      this.setState(data);
  }

  onSubmit(e) {
      e.preventDefault();
      let data = {
        name: this.state.name,
        slug: this.state.slug,
        type: this.state.type
      };
      
      CategoryService.create(data)
      .then(response => {
          return response.json();
      })
      .then(data => {
        
          if(data.requiredErrs) {
              return this.setState({
                  requiredErrs: data.requiredErrs
              })
          }

          if(data.errors) {
            return this.setState({
                errors: data.errors
            })
        }

          if(data.hasError) {
              return  NotificationManager.error(data.msg);
          }
          
          NotificationManager.success(data.msg);
          this.props.history.push('/admin/brands');
          
      })
      .catch(err => {
          console.log(err);
          
          NotificationManager.error('Error');
      })
  }

    render() {
      console.log(this.state.requiredErrs);
        return (
          <div className="row custom-form">
            <div className="col-lg-6 admin-form">
              <div className="card">
                <div className="card-header">
                  <h1>Create New Category</h1>
                </div>
                <div className="card-body card-block">
                  <form onSubmit={this.onSubmit} encType="multipart/form-data" className="form-horizontal">
                    <Errors errors={this.state.requiredErrs} />

                    <FormRow type="text" name="name" title="Category Name" error={this.state.errors.name} validateFunc={validateName} change={this.change} defaultValue={this.state.name} isInput={true} />
                    <FormRow type="text" name="slug" title="Category Slug" error={this.state.errors.slug} validateFunc={validateSlug} change={this.change} defaultValue={this.state.slug} isInput={true} />
                    <FormRow title="Type" error={this.state.errors.type} isSelect={true} select={this.select}/>
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
        )
    }
}

const Errors = (props) => {
  let { errors } = props;


  if(errors) {
      return errors.map(err => (
          <div class="alert alert-danger-custom">{err}</div>
      ))
  }
  return null;
}


const FormRow = (props) => {
  let { type, name, title, change: onChangeEvent, defaultValue, error, isInput, isSelect} = props;

  return (
      <div className="row form-group form-item">
          <div className="col col-md-3">
              <label htmlFor="text-input" className="form-control-label">{title}</label>
          </div>
          <div className="col-12 col-md-9">
          {isInput ?  <Input type={type} name={name} title={title} validateFunc={props.validateFunc} change={onChangeEvent} defaultValue={defaultValue}/> : null}
          {isSelect ? <Select select={props.select}/> : null}
              {
                  error === null ? null: <small className="text-danger">{ error}</small>
              }
              
          </div>
      </div>
  )
}

const Input = (props) => {
  let { type, name, title, change: onChangeEvent, defaultValue, error} = props;

  return   <input type={type} name={name} placeholder={title} className="form-control" onChange={(e) => onChangeEvent(e, name)} value={defaultValue}/>
}

class Select extends Component {
  constructor(props) {
    super(props);

    this.newSelect = this.newSelect.bind(this);
  }

  newSelect(e) {
    this.props.select(e.target.selectedOptions);
  }

  render() {
    return (
        <select name="type" onChange={this.newSelect}>
            <option value="0">By Sex</option>
            <option value="1">By Category</option>
        </select>
    )
  }
}


function validateName(name) {
  if(name && (name.length >= 1 && name.length <= 50) ) {
      return null;
  }

  return 'Category Name should be between 1 and 50 characters';
}

function validateSlug(name) {
  if(name && (name.length >= 1 && name.length <= 100) ) {
      return null;
  }

  return 'Category Slug should be between 1 and 100 characters';
}
export default withRouter(CategoryNew);
