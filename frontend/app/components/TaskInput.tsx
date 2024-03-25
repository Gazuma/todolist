'use client';
import React,{useState} from "react";

interface props{
    add:Function,
}

const TaskInput = (props:props)=>{
    const [formData,setFormData] = useState({});
    const handleFormChange=(e:any)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
        console.log(formData);
    }
    
    return(
        <div>
            <input onChange={(e)=>{handleFormChange(e)}} name="task" placeholder="add task" className="border border-2"/>
            <input onChange={(e)=>{handleFormChange(e)}} name="description" placeholder="add description" className="border border-2"/>
            <button onClick={(e)=>{props.add(formData)}} className="border border-2">ADD</button>
        </div>
    )
}
export default TaskInput;