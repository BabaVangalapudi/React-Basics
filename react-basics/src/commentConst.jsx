const CommentCont = (props)=>{
    const {name,email,body}= props
    return(
        <div className="commentContainer">
            <h3>{name}</h3>
            <h4>{email}</h4>
            <p>{body}</p>
        </div>
    )
}
export default CommentCont;