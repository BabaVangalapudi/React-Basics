import React from 'react'
import { useState } from 'react'

const Formvalidation = () => {
    const [username,setUsername] = useState('')
    const [usermail,setEmail] = useState('')
    const [userpassword,setPassword] = useState('')
    // const onHandle =(e,name)=>{
    //     if (name==="username"){
    //         setUsername(e.target.value)
    //     }else if (name==="email"){
    //         setEmail(e.target.value)
    //     }else if (name==="password"){
    //         setPassword(e.target.value)
    //     }
    // }
    const handleSubmit =(e)=>{
        e.preventDefault()
        const obj ={
            firstname: username,
            email: usermail,
            password:userpassword
        }
        console.log(obj)
        setUsername('')
        setEmail('')
        setPassword('')
    }

  return (
    <div>
      <form onSubmit={handleSubmit}> 
      <input type="text" name='username' id='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <input type="email" name='email' id='email' value={usermail} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" name='password' id='password' value={userpassword} onChange={(e)=>setPassword(e.target.value)} />
      <button type="submit" >Submit</button>
      </form>
      {/* <div>
        <h1>{username}</h1>
        <h1>{usermail}</h1>
        <h1>{userpassword}</h1>
      </div> */}
    </div>
  )
}

export default Formvalidation
