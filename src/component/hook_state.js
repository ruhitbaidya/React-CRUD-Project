import React, {useState} from 'react'

export default function State_Menage() {
  const [valueAll, setVaueAll] = useState("")
  const handelChange = (e)=>{
    setVaueAll(e.target.value)
  }
  return (
    <div>
      <input type="text" onChange={handelChange} />
      <h1>{valueAll}</h1>
    </div>
  )
}


