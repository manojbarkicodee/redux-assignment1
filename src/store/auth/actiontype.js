import { LOGIN_error, LOGIN_LOADING, LOGIN_success, LOGOUT } from "./action"
import axios from "axios"
export let loginapi=(dispatch,data)=>{
dispatch({type:LOGIN_LOADING})
console.log(data)
axios.post("https://reqres.in/api/login",{
    email:data.email,
    password:data.password
}).then((res)=>{dispatch({type:LOGIN_success,payload:res.data})})
.catch((e)=>{
    dispatch({type:LOGIN_error})
})


}

export let logoutapi=()=>(
    {type:LOGOUT}
)