import React from 'react';
import { Link } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

function withListAllService(Component, service, options) {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                data: [],
                isLoading: false,
                status: false
            }
            this.service = service;
            this.rerenderData = this.rerenderData.bind(this);
            this.callService = this.callService.bind(this);
        }

        componentDidMount() {
            this.setState( {
                isLoading: true
            })
           this.callService();
        }

        componentDidUpdate(prevProps, prevState) {
            if(prevState.status !== this.state.status) {
                this.callService();
                return true;
            }
            return false;
        }

        callService() {
            this.service()
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if(data.hasError) {
                    this.setState( { isLoading: false })
                    return NotificationManager.error(data.msg);
                }

               NotificationManager.success(data.msg);
                this.setState( {
                    isLoading: false,
                    data: data.data
                })
            })
            .catch(err => {
                console.log(err);
                NotificationManager.error('An error occurred while trying to fetch all the tags');
                this.setState( { isLoading: false })
                return;
            })
        }

        rerenderData() {
            this.setState({
                status: !this.state.status
            });
        }
        
        render() {
            return (
                <div className="section__content section__content--p30">
                <div className="container-fluid">
                <div class="row">


        <div class="col-md-12">
        <h1 class="m-b-35">{options.heading}</h1>
                                <div class="table-data__tool">
                                    <div class="table-data__tool-left">
                                        <div class="rs-select2--light rs-select2--md">
                                            <select class="js-select2" name="property">
                                                <option selected="selected">All Properties</option>
                                                <option value="">Option 1</option>
                                                <option value="">Option 2</option>
                                            </select>
                                            <div class="dropDownSelect2"></div>
                                        </div>
                                        <div class="rs-select2--light rs-select2--sm">
                                            <select class="js-select2" name="time">
                                                <option selected="selected">Today</option>
                                                <option value="">3 Days</option>
                                                <option value="">1 Week</option>
                                            </select>
                                            <div class="dropDownSelect2"></div>
                                        </div>
                                        <button class="au-btn-filter">
                                            <i class="zmdi zmdi-filter-list"></i>filters</button>
                                    </div>
                                    <div class="table-data__tool-right">
                                    {options.missingBtn ? null : 
            <Link to={options.to} class="au-btn au-btn-icon au-btn--green au-btn--small">
                <i class="zmdi zmdi-plus"></i>Add New</Link>
                }
                                       
                                    </div>
                                </div>
         
               {
                   this.state.isLoading ? <h2>Loading...</h2> :<Component data={this.state.data} rerenderData={this.rerenderData}/>
               }
        </div>
    </div>
                </div>
                </div>
               
            )
        }
    }
}

export default withListAllService;