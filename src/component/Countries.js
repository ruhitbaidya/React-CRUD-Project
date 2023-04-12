import React from 'react'

export default function Countries(props) {
  return (
    <div>
        <div className="card">
            <img src={props.SingCoun.coatOfArms.png} alt={props.SingCoun.name.common} /> 
        <div className="card-body">
            <h5 className="card-title">{props.SingCoun.name.common}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button>Remove Country</button>
        </div>
</div>
    </div>
  )
}
