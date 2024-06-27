import {createSlice} from "@reduxjs/toolkit";


const initialState={
    tasks:[],
    filter:"all"
}

const taskSlice=createSlice({
    name:"tasks",
    initialState,
    reducers:{
        addTask:(state,action)=>{
            state.tasks.push(action.payload)

        },
        toggle:(state,action)=>{
            const {id}=action.payload
            const task=state.tasks.find(task=>task.id===id);
            if (task){
                task.isDone =!task.isDone
            }
        },
        setFilter:(state,action)=>{
            state.filter=action.payload
        },
        editTaskDescription:(state,action)=>{
            const {id,description}=action.payload
            const task=state.tasks.find(task=>task.id===id);
            if(task){
                task.description=description
            }

        }

    }
})

export const {addTask,editTaskDescription,toggle,setFilter}=taskSlice.actions;
export default taskSlice.reducer;