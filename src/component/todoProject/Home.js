import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewTodo from './NewTodo';
import Todo from "./todo"
const dummyDatas = [
    {
        id : uuidv4(),
        title : "this is me Ruhit",
        desc : "this is my some of crud"
    },
    {
        id : uuidv4(),
        title : "this is me Ruhit",
        desc : "this is my some of crud"
    }
]



export default function Home() {
  const [alldatas, setAlldatas] = useState(dummyDatas)

  const dataPassCtoP = (todo)=>{
    
    setAlldatas(prev => {
      return [...prev, {id :uuidv4(), ...todo}]
    })
    console.log(alldatas)
  }
  const handelDeleteid = (finds)=>{
      setAlldatas(prev => {
        const fildterData = prev.filter((todo)=> todo.id !== finds)
        return fildterData;
      })
  }
  return (
    <div>
        <NewTodo passVal={dataPassCtoP}/>
        <Todo passData={alldatas} onIdCheck={handelDeleteid} />
    </div>
  )
}
