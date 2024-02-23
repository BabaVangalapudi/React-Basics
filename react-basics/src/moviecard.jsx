const Movie = (props)=>{
    const {imageUrl,title}=props
    return (
      <div className='imagecontainer'>
        <img src={imageUrl} alt='image1' className='image'/>
        <h1>{title}</h1>
      </div>
    )
    }
export default Movie