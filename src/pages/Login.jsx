import React,{useEffect, useState} from 'react'
import {useDispatch, useSelector} from"react-redux"
import {  useNavigate } from 'react-router-dom'
import { loginapi } from '../store/auth/actiontype'
const Login = () => {
  const {success}=useSelector((state)=>state.authred)
    let dispatch=useDispatch()
    const navigate=useNavigate()
    // const location=useLocation()
const [data,setdata] = useState({email:"eve.holt@reqres.in",password:"cityslicka"})
let getdata=(e)=>{
   let {value,name}=e.target
setdata({...data,[name]:value})
}
console.log(data)
let onsubmit=(e)=>{
    e.preventDefault()
    loginapi(dispatch,data)
}
useEffect(() => {
  if (success) {
    navigate("/");
  }
}, [navigate,success]);
  return (
    <div>
        <form onSubmit={onsubmit}>
            <input onChange={getdata} value={data.email} type="email" name="email" placeholder='enter email' />
            <input onChange={getdata} value={data.password} type="password" name="password" placeholder="enter password"></input>
            {/* <input type="submit">login</input>
            {/* <input type="submit" value="login" /> */}
            <button>login</button>
        </form>
    </div>
  )
}

export default Login