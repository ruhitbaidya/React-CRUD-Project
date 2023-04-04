import React from 'react';
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
  return (
    <div>
        <NewTodo passVal={dummyDatas}/>
        <Todo passData={dummyDatas} />
    </div>
  )
}
