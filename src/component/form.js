import React, {useState} from 'react'

 function Form() {
    const [user, setUser] = useState({name : "", email : "", password : "", number : ""})
    const handelChange = (e)=>{
        const {name , email, password , number} = user
        const fieldName = e.target.name;
        if(fieldName === "name"){
            setUser({name : e.target.value, email, password , number});
        }else if(fieldName === "email"){
            setUser({name , email: e.target.value, password , number});
        }else if(fieldName === "password"){
            setUser({name , email, password: e.target.value , number});
        }else if(fieldName === "number"){
            setUser({name , email, password , number: e.target.value});
        }
    }
    const dataSubmit = (e)=>{
        console.log(user)
        e.preventDefault()
    }

  return (
    <div>
      <h1>Register</h1>

      <form action="#" onSubmit={dataSubmit}>
        <div>
        <label>Name</label>
        <input type="text" name="name" onChange={handelChange} />
        </div>
        <div>
        <label>Name</label>
        <input type="email" name="email" onChange={handelChange} />
        </div>
        <div>
        <label>Name</label>
        <input type="password" name="password" onChange={handelChange} />
        </div>
        <div>
        <label>Name</label>
        <input type="number" name="numbers" onChange={handelChange} />
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}


export default Form