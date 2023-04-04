import React, { Component } from 'react'

export default class EditSystem extends Component {


    bodyHandelClick = (e)=>{
        console.log(e)
    }
    buttonHandelClick = (e)=>{
        e.stopPropagation()
        console.log(e)
    }
  render() {
    return (
      <div>
        <div style={{background : "red", padding : "20px"}} onClick={this.bodyHandelClick}>
            <button onClick={this.buttonHandelClick}>Submit</button>
        </div>
      </div>
    )
  }
}
