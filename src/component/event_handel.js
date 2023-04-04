import React, { Component } from 'react'

export default class event_handel extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         values : ""
      }
    }
    
    handelChange = (e)=>{
        this.setState({
            values : e.target.value
        })
    }
    
  render() {
    console.log(this.state.values)
    return (
      <div>
        <input type="text"  onChange={this.handelChange} />
        <h1>{this.state.values}</h1>
        <h2>{this.state.values}</h2>
        <h3>{this.state.values}</h3>
        <h4>{this.state.values}</h4>
        <h5>{this.state.values}</h5>
        <h6>{this.state.values}</h6>
      </div>
    )
  }
}
