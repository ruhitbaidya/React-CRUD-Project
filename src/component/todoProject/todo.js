import React from 'react'
import Todos from "./todos"
export default function Todo(props) {
  return (
    <div>
      <div className='bg-dark'>
      <div className='container '>
        <div className='row pb-2'>
            <div className='col-md-3'></div>
            <div className='col-md-6 text-light'>
            <h4 className='text-light text-center'>TODO DATA</h4>
                {
                    props.passData.map((todo)=>{
                        return <Todos key={todo.id} designData={todo} />
                    })
                }
            </div>
            <div className='col-md-3'></div>
        </div>
      </div>
    </div>
    </div>
  )
}
