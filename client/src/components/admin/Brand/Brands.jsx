import React, { Component } from 'react';
import { NotificationManager } from 'react-notifications';
import { Link } from 'react-router-dom';

import BrandService from '../../../services/brand-service';
import withListAllService from '../../../hocs/with-list-all-service';

const Brands = (props) => {
    let brands = props.data;
    return (
        <div class="table-responsive table-responsive-data2">
            <table class="table table-data2">
                <thead>
                    <tr>
                        <th>Brand Name</th>
                        <th>Date</th>
                        <th>Is Active</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                        {brands && brands.length > 0 ? 
                        brands.map((brand) => <BrandRow brand={brand} rerenderData={props.rerenderData} />)
                        : <h2 className="text-center">No brands to show</h2>
                        }
                    </tbody>
            </table>
        </div>
    )
}


class BrandRow extends React.Component {
    constructor(props) {
        super(props);
        this.changeStatus = this.changeStatus.bind(this);

        console.log(props);
    }

    changeStatus(e) {
        let target = e.target;

        let id = target.getAttribute('data-id');

        if (id === null) {
            id = target.parentElement.getAttribute('data-id');
        }

        BrandService.changeStatus(id)
        .then(response => response.json())
            .then(data => {
                if (data.hasError) {
                    return NotificationManager.error(data.msg);
                }
                
                console.log(data);

                NotificationManager.success(data.msg);
                this.props.rerenderData();
            })
            .catch(err => {
                console.log(err);
                return NotificationManager.error('An error occurred while trying to change the status of a brand!');
            })
    }
    render() {
        let { brand } = this.props;

        return (
            <React.Fragment>
                <tr className="tr-shadow">
                    <td>{brand.name}</td>
                    <td>{brand.createdOn}</td>
                    <td>{brand.isActive ?
                        <span class="table-label table-label-success">Active</span> :
                        <span class="table-label table-label-danger">Inactive</span>
                    }</td>
                    <td>
                        <div class="table-data-feature">
                            <Link to={'/brand/edit/' + brand._id} class="item" data-toggle="tooltip" data-placement="top" title="Edit" >
                                <i class="zmdi zmdi-edit"></i>
                            </Link>
                            <button class="item" data-toggle="tooltip" data-placement="top" title="Delete" data-id={brand._id} onClick={this.changeStatus}>
                                <i class="zmdi zmdi-delete"></i>
                            </button>
                        </div>
                    </td>

                </tr>
                <tr clasName="spacer"></tr>
            </React.Fragment>
        )
    }
}

const options = {
    heading: 'Brands',
    to: '/admin/brand/new'
}

export default withListAllService(Brands, BrandService.listAll, options);