import { LOGIN_error, LOGIN_LOADING, LOGIN_success, LOGOUT } from "./action"
let initial={
    loading:false,
    success:false,
    error:false
}
export const authreducer=(state=initial,{type,payload})=>{
    // console.log(type)
switch(type){
    case LOGIN_LOADING:{
        return {...state,loading:true}
    }
    case LOGIN_success:{
        console.log(payload)
        return {...state,loading:false,success:true}
        }
    case LOGIN_error:{
        return {...state,error:true}
    }
    case LOGOUT :{
        return {...state,success:false}
    }
        default:{
            return state
        }
}
}