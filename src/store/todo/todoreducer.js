import { add } from "./actiontype"

let initial={todo:[]}
export let todoreducer=(state=initial,{type,payload})=>{
    switch(type){
        case add:{
            
            state.todo=[...state.todo,payload]
            localStorage.setItem("data",JSON.stringify(state.todo))
return {...state}
        }
        default:{
            return state
        }
    }
    
    }