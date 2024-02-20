const Movie = (props)=>{
    const {imageURL,title}=props
    return (
      <div className='imagecontainer'>
        <img src={imageURL} alt='image1' className='image'/>
        <h1>{title}</h1>
      </div>
    )
    }
export default Movie