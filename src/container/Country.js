import React, { Component } from 'react'
import City from './City';

export default class Country extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            CountryName : 'India'
        }
    }
    
    ChangeCountry = () => {
        this.setState ({
            CountryName : 'Us'
        });
    }

  render() {
    return (
      <div>
          <p>{this.state.CountryName}</p>
          <button onClick={() => this.ChangeCountry()}>Change Country</button>
          <City id='101' Country_name={this.state.CountryName}/>
      </div>
    )
  }
}
