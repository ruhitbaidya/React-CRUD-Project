import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
export default function NewTodo(props) {
    const [datas, setDatas] = useState()
    const allDatas = props.passVal
    const handelData = (e)=>{
        const {title, desc} = datas
        const findName = e.target.name;
        if(findName === "title"){
            setDatas({title : e.target.value, desc})
        }else if(findName === "desc"){
            setDatas({title, desc : e.target.value})
        }
        setDatas({id : uuidv4(), title : "", desc : ""})
    }
    const handelSubmit = (e)=>{
        e.preventDefault();
        console.log(datas);
    }
  return (
    <div className='bg-dark'>
      <div className='container '>
        <div className='row py-5'>
            <div className='col-md-12'>
                <h1 className='text-light text-center'>TODO PROJECT</h1>
                <form onSubmit={handelSubmit}>
                    <div className='row'>
                    <div className='col-md-3'></div>
                        <div className='col-md-6'>
                           <div className='my-2'>
                            <label htmlFor='title' className='text-light'>Title</label>
                            <input type="text" name="title" className='form-control' placeholder='Title' onChange={handelData} />
                           </div>
                           <div>
                            <label htmlFor='desc' className='text-light'>Description</label>
                            <textarea className='form-control' name="desc" placeholder='Description' onChange={handelData} />
                           </div>
                            <div className="d-grid gap-2 mt-3">
                                <button className="btn btn-light" type="submit">Add Todo</button>
                            </div>
                        </div>
                        <div className='col-md-3'></div>
                    </div>
                    <div></div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}
