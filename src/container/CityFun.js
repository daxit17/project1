import React, { useState } from 'react'

export default function CityFun(props) {

    const [CityFun , setCityName] = useState ('india');

    const ChangeCity = () => {
        setCityName('us');
    }


  return (
    <div>
        <p>{CityFun}</p>
        <button onClick={ () => ChangeCity()}>Change City</button>
        <p> {props.id} {props.country_name} </p>
    </div>
  )
}
