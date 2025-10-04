import {createSlice} from "@reduxjs/toolkit"

const todoSlice = createSlice({
    name:"todos",
    initialState:[],
    reducers:{
        createtodo:(state,action)=>{
            state.push(action.payload)
            return state
        },
        updateStatusTodo: (state, action) =>{
            state.map((todo)=>{
                if(todo.id === action.payload.id){
                    todo.status = action.payload.status
                }
            })
            return state
        },
        deletetodo: (state, action) =>{
            return state.filter((todo)=> todo.id !== action.payload.id)
        },
        updatetodo:(state,action)=>{
            state.map((todo)=>{
                if(todo.id === action.payload.id){
                    todo.name = action.payload.name
                    todo.description = action.payload.description
                    todo.date = action.payload.date
                    todo.time = action.payload.time 
                }
            })
        }
    }
})

export const {createtodo, updateStatusTodo, deletetodo, updatetodo} = todoSlice.actions
export default todoSlice.reducer