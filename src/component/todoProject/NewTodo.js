import React, {useState} from 'react'
export default function NewTodo(props) {
    const [datas, setDatas] = useState({title : "", desc : ""})
    const handelData = (e)=>{
        const name = e.target.name;
        setDatas((prev =>{
            return {...prev, [name] : e.target.value}
        }))
    }
    const handelSubmit = (e)=>{
        props.passVal(datas)
        e.preventDefault();
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
