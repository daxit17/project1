import React, { Component } from 'react'

export default class City extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            CityName:'Surat'
        }
    }

    ChangeCity = () => {
        this.setState({
            CityName:'Rajkot'
        })
    }
    

  render() {
    return (
      <div>
          <p>{this.state.CityName}</p>
          <button onClick={ () => this.ChangeCity() }>Change City</button>
          <p>{this.props.id} {this.props.Country_name}</p>
      </div>
    )
  }
}
