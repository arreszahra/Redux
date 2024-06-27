
import { useState} from "react";
import {toggle,editTaskDescription } from "./taskSlice";
import { useDispatch } from "react-redux";

const Task=({task})=>{
    const [editable,setEditable]=useState(false);
    const [editedeDescription,setEditedDescription]=useState(task.description);
    const dispatch=useDispatch();

    const handleToggleTask=()=>{
        dispatch(toggle({id:task.id}))
    }
    const handleEditTask=()=>{
        dispatch(editTaskDescription({id:task.id, description:editedeDescription}))
        setEditable(false);
    }
    return  (
        <div>
            <input type="checkbox" checked={task.isDone} onChange={handleToggleTask}/>
    { editable ?  (
            <input type="text" value={editedeDescription}
         onChange={e=>setEditedDescription(e.target.value)} onBlur={handleEditTask} autoFocus/>
        )
         :(
            <span onClick={()=>setEditable(true)}>{task.description}</span>
         )
    }
        </div>
    );
}
export default Task;