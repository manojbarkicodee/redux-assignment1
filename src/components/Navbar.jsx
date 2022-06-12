import React from 'react'
// import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import { logoutapi } from '../store/auth/actiontype'

const Navbar = () => {
  let dispatch=useDispatch()
    let {success}=useSelector((state)=>state.authred)
    console.log(success)

    let onlogout=()=>{
dispatch(logoutapi())
    }
  return (
    <div>
        <button onClick={onlogout}>{success?"logout":"login"}</button>
    </div>
  )
}

export default Navbar