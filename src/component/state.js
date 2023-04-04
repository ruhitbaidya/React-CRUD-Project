import React, { Component } from 'react'

export default class state extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }
    incrementHandel = ()=>{
        this.setState({
            count : this.state.count + 1
        })
    }
    decrementHandel = ()=>{
        this.setState({
            count : this.state.count - 1
        })
        
    }
  render() {
    const {count}= this.state
    
    return (
      <div>
        <h2>this is me ruhit</h2>
        <div>
            <h4>Count : {count}
            </h4>
            <button onClick={this.incrementHandel} className='btn btn-primary m-3'>+</button>
            <button onClick={this.decrementHandel} className='btn btn-primary'>-</button>
        </div>
      </div>
    )
  }
}
