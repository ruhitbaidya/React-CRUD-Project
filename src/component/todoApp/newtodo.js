import React, { useState } from 'react'

export default function Newtodo(props) {
    const [newTodo, setNewTodo] = useState("");
    const handelTodo = (e)=>{
        setNewTodo(e.target.value)
    }
    const handelSubmit = (e)=>{
        e.preventDefault();
        props.dataSend(newTodo)
    }
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input type="text" onChange={handelTodo} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
