import React from 'react'
import { useState } from 'react'


const Calculator = () => {
    const [input,setInput] = useState('')
    const [theme, setTheme] = useState('light')
    const onHandler = (value)=>{
      try {
        if (value ==='='){
          setInput(eval(input).toString())
      }else if (value==='c'){
          setInput('')
      }else{
          setInput((prevInput)=>(prevInput+value))
      }
        
      } catch (error) {
        alert('Check entered input again')
      }  
    }
    const changeTheme= ()=>{
      setTheme(!theme)
    }
    const onHandleBack = ()=>{
      setInput((prevInput) => prevInput.slice(0, -1));
    }
  return (
    <div className={'container ${theme}'}>
        <button className='changeTheme' onClick={changeTheme}>{theme ? 'White':'Dark'}</button>
        <input type="text" readOnly value={input} className='display'/>
      <div className='button-container'> 
        <button onClick={()=>onHandler('7')}>7</button>
        <button onClick={()=>onHandler('8')}>8</button>
        <button onClick={()=>onHandler('9')}>9</button>
        <button onClick={()=>onHandler('/')}>/</button>
        <button onClick={()=>onHandler('4')}>4</button>
        <button onClick={()=>onHandler('5')}>5</button>
        <button onClick={()=>onHandler('6')}>6</button>
        <button onClick={()=>onHandler('*')}>*</button>
        <button onClick={()=>onHandler('1')}>1</button>
        <button onClick={()=>onHandler('2')}>2</button>
        <button onClick={()=>onHandler('3')}>3</button>
        <button onClick={()=>onHandler('+')}>+</button>
        <button onClick={()=>onHandler('-')}>-</button>
        <button onClick={()=>onHandler('0')}>0</button>
        <button onClick={()=>onHandler('c')}>C</button>
        <button onClick={()=>onHandler('=')}>=</button>
      </div>
      <button onClick={onHandleBack}>Back</button>
    </div>
  )
}

export default Calculator
