import React from 'react'
import Movie from './moviecard'
import { useState } from 'react'
import initObj from './data'

const App = () => {
  const [data, setData] = useState(initObj)
  const onDelete =(comingid)=>{
        const filterData = data.filter((eachitem)=>{
           return eachitem.id !== comingid
        })
        setData(filterData)
  }
  return(
    <section className='container'>
        {data.map((each)=>{
            // const {id,name,email,body}=each
            // return(
            //   <CommentCont key={id} name={name} email={email} body={body}/>
            //       )
          const {id,title,imageUrl} = each
          return(
            <li key={id}>
              <Movie title={title} imageUrl={imageUrl}/>
              <button onClick={()=>onDelete(id)}>Delete</button>
            </li>
            
          )
        })}
    </section>
    
  )
}



export default App;
