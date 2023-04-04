import React, { Component } from 'react'

export default class card2 extends Component {
  render() {
    return (
      <div className='card'>
        <span>{this.props.id}</span>
        <h2>{this.props.title}</h2>
        <p>{this.props.desc}</p>
        <button>Read More</button>
      </div>
    )
  }
}
