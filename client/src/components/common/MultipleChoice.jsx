import React, { Component } from 'react';

class MultipleChoice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cars: null
        }

        this.selectOptions = this.selectOptions.bind(this);
    };

    selectOptions(e) {
        let cars = [];
        let options =  e.target.selectedOptions;

            for(let i = 0; i <options.length; i++) {
                cars.push(options[i].value)
             }
        
        console.log(cars);
    }


    render() {
        return (
            <select name="cars" multiple onChange={this.selectOptions}>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
        )
    }
}

export default MultipleChoice;