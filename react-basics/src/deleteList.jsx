const DeleteButton = (props)=>{
    const onDelete = (id)=>{
        return(
            console.log(id)
        )
    }
    return(
        <button onClick={()=>onDelete(props.id)}>Delete</button>
    )
}
export default DeleteButton