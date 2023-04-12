import React from 'react'
import Countries from "./Countries"
import { v4 as uuidv4 } from 'uuid';

export default function CountryApp(props) {
  return (
    <div>
      {props.dataSend.map((user)=> <Countries key={uuidv4()} SingCoun={user} />)}
    </div>
  )
}
