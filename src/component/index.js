import React, {useState, useEffect} from 'react'
import CountryApp from "./CountryApp"

const url = "https://restcountries.com/v3.1/all"

export default function CounteryAppProject() {
    const [isLoading, setIsLoading] = useState(true)
    const [findData, setFindData] = useState([])
    const [errors, setErrors] = useState(null)


    const apiCallingFun = async (url)=>{
        setIsLoading(true)
        try{
            const respons = await fetch(url)
            const Datas = await respons.json()
            setFindData(Datas)
            setIsLoading(false)
            setErrors(null)
        }catch(err){
            setErrors(err)
            setIsLoading(false)
           
        }
    }
    useEffect(()=>{
       apiCallingFun(url)
    }, [])
  return (
    <div>
      <div>
            <h1>Country App Project</h1>
            <input type="text" />
      </div>
      <div>
        {isLoading && <p>Loading.....</p>}
        {errors && <h5>{errors.message}</h5>}
        {findData && <CountryApp dataSend={findData} />}
      </div>
    </div>
  )
}
