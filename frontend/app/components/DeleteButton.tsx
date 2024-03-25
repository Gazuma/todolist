'use client'
import React from "react"

interface props{
    id:string,
    delete:Function
}

const DeleteButton=(props:props)=>{
   
    return(
        <button onClick={()=>{props.delete(props.id)}} className="border border-2">Delete</button>
    )
}
export default DeleteButton