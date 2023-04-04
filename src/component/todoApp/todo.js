import React from 'react'
import Todos from "./todos"
export default function Todo(props) {
  return (
    <div>
      {props.Working.map((todo, index)=>{
        return <Todos key={index} design={todo}/>
      })}
    </div>
  )
}
