import React, { Component, Fragment } from 'react';
import UniversalForm from '../../common/UniversalForm';
import BrandService from '../../../services/brand-service';

class NewBrand extends Component {
    constructor(props) {
        super(props);

        this.service = BrandService.create;
    }
    render() {
        return (
            <Fragment>
                <UniversalForm title='Create new brand' service={this.service} redirectTo='/admin/brands'>
                    <input type="text" name="name" title="Brand Name" validateFunc={validateName}/>
                </UniversalForm>
            </Fragment>
           
        )
    }
}

export default NewBrand;

function validateName(name) {
    if(!name || name.length < 1 || name.length > 50) {
        return 'Brand name should be between 1 and 50!'
    }

    return null;
}
