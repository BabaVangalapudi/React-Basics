import React from 'react'
import { useState } from 'react'
import './calculator.css'

const Calculator = () => {
    const [input,setInput] = useState('')
    const onHandler = (value)=>{
        if (value ==='='){
            setInput(eval(input).toString())
        }else if (value==='c'){
            setInput('')
        }else{
            setInput((prevInput)=>(prevInput+value))
        }
    }
  return (
    <div className='container'>
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
    </div>
  )
}

export default Calculator
