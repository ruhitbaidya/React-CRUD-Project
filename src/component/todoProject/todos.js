import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
export default function Todos(props) {
    const {title, id, desc} = props.designData
    const deleteData = (idFi)=>{
       props.onIdCheck(idFi)
    }
  return (
    <div className='p-2 my-1 bg-secondary rounded'>
        <div className='row'>
            <div className='col-10'>
                <h5>{title}</h5>
                <p>{desc}</p>
            </div>
            <div className='col-2 h-auto d-flex justify-content-evenly my-auto'>
                <div>
                <button className='btn btn-light' onClick={()=>{
                    deleteData(id)
                }}><FaTrashAlt /></button>
                </div>
            </div> 
        </div> 
    </div>
  )
}
