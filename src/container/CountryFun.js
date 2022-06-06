import React, { useState } from 'react'
import CityFun from './CityFun';

export default function CountryFun(props) {

    const [CountryName , setCountryName] = useState ('India');

    const ChangeCountry = () => {
        setCountryName ('Japan');
    }

  return (
    <div>
        <p>{CountryName}</p>
        <button onClick={() => ChangeCountry()}>Change Country</button>
        <CityFun id='102' country_name ={props.CountryName}/>
    </div>
  )
}
