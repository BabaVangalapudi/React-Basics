import React, { useState } from 'react'
import './show.css'

const Showcontent = () => {
    const [showData, setData] = useState(false)
    const onHandleShow = ()=>{
        setData(!showData)
    }
  return (
    <div className='showContent'>
      <button className='showButton' onClick={onHandleShow}>{showData ? "Hide" : "Show"}</button>
        {/* {
            showData && (
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem labore eligendi eos consequuntur numquam sunt mollitia nostrum, alias aliquam nemo.</p>
            )
        } */}
        {
            showData ? <p>Nothing to Show here ❤️❤️</p>
            : <p>Click the button see hidden content</p>
        }
    </div>
  )
}

export default Showcontent
