import React, {useState} from 'react'
import Todo from "./todo"
import NewTodo from "./newtodo"
const datas = ["item1", "items2"]
export default function Home(props) {
    const [todos, setTodos] = useState(datas)
    const addingDatas = (Ftodo)=>{
        setTodos([...todos, Ftodo])
    }
    console.log(todos)
  return (
    <div>
    <NewTodo dataSend={addingDatas}/>
     <Todo Working={todos} />
    </div>
  )
}
