import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { addTask } from "./taskSlice";
import { nanoid } from "@reduxjs/toolkit";


const AddTask=()=>
{
    const [taskDescription,setTaskDescription]=useState('');
    const dispatch=useDispatch();

    const handleAddTask=()=>{
           if (taskDescription.trim()==='')
            return;
        dispatch(addTask({
            id:nanoid(),
            description:taskDescription,
            isDone:false
        }))
      setTaskDescription('');
    }

    return(
        <form >
            <input type="text" placeholder="Add ToDo" value={taskDescription} 
            onChange={(event)=> setTaskDescription(event.target.value)}/>
            <button onClick={handleAddTask} >Add Task</button>
        </form>
    )
}
export default AddTask;


