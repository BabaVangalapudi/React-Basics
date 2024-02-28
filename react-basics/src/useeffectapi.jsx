import React from 'react'
import { useState,useEffect } from 'react'
const URL = "https://jsonplaceholder.typicode.com/user"

const Useeffectapi = () => {
    const [data,setData] = useState([])
    const[loading, setLoading] = useState(false)
    const fetchData = async (url)=>{
        try {
            const response = await fetch(url)
            const apidata = await response.json()
            console.log(apidata)
            setData(apidata)     
        } catch (error) {
            console.log(error)
        }
       }
   useEffect(()=>{
    fetchData(URL)
   },[])
  return (
    <div>
      <ul>{
        data.map((each)=>{
            const {name,username,email,id,address} = each
            return <li key={id}>
                <h1>{name}</h1>
                <h2>{username}</h2>
                <h3>{email}</h3>
                <h4>{address.zipcode}</h4>
            </li>
        })
      }
      </ul>
    </div>
  )
}

export default Useeffectapi
