import React,{useEffect,useState} from 'react'

const Example = () => {
    const[count,setCount] = useState(0)
    const[toggle, setToggle]=useState(true)
    const[width, setWidth]= useState(window.innerWidth)
    useEffect(() => {
        const resizehandler = ()=>{
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', resizehandler)
        // componentWillUnmount
        return()=>{
            console.log('Removed')
            window.removeEventListener('resize',resizehandler)
        }
    })
    // useEffect(()=>{
    //     console.log('Hi i am re rendered with the count state')
    // },[count])
    
  return (
    <div>
      <h1>Use Effect Example</h1>
      <h1>{count}</h1>
      <h1 onClick={()=>setToggle(!toggle)}>{toggle ? "Open":"Close"}</h1>
      <h1>{width}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default Example
