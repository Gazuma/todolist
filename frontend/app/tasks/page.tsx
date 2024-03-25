
import React, { useState } from "react";
import TaskInput from "../components/TaskInput";
import DeleteButton from "../components/DeleteButton";
interface Task{
    _id : string,
    task:string,
    description:string
}

const Tasks = async()=>{
    const data = await fetch(`${process.env.FETCH_API}`,{
        cache:'no-store'
    })
    const tasks:Task[] = await data.json();
    
    const deleteTask = async(task_id:string)=>{
        "use server"
        const methodBody = {_id:task_id}
        console.log(methodBody)
        const res = await fetch(`${process.env.FETCH_API}`,{
            method:"DELETE",
           body:JSON.stringify(methodBody),
           headers:{
            "Content-type":"application/json; charset=UTF-8"
        }
        })
        // const res = await fetch("http://web-server-container:3000/",{
        //     method:"DELETE",
        //    body:JSON.stringify(methodBody),
        //    headers:{
        //     "Content-type":"application/json; charset=UTF-8"
        // }
        // })
    }
    const addTask = async(formData:any)=>{
        "use server"
        console.log(formData)
        const res = await fetch(`${process.env.FETCH_API}/`,{
            method:"POST",
            body: JSON.stringify(formData),
            headers:{
                "Content-type":"application/json; charset=UTF-8",
                "Access-Control-Allow-Origin": "*", 
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS", 
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept", 
            }
        })
        
    }

    return(
        <div>
            <TaskInput add={addTask}/>
            {tasks.map(task=><li key={task._id}>
                <h1>
                Task: {task.task}
                </h1>
                <p>Description: {task.description}</p>
                <DeleteButton delete={deleteTask} id={task._id}/>
            </li>)}
        </div>
    )
}

export default Tasks