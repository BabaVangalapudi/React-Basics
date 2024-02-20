import React from 'react'
import CommentCont from './commentConst'
import comments from './comments'

const App = () => {
  return(
    <section className='container'>
        {comments.map((each)=>{
            const {id,name,email,body}=each
            return(
              <CommentCont key={id} name={name} email={email} body={body}/>
                  )
        })}
    </section>
  )
}



export default App;
