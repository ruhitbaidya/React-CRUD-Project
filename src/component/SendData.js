import React from 'react'

export default function FindOut(props) {
    const data = "this is me ruhit i am from child components";
    props.pass(data)
  return (
    <div>
      this is component
    </div>
  )
}
