import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const RequiredAuth = ({children}) => {
    let {success}=useSelector((state)=>state.authred)
console.log(success)
    if(success){
        console.log(success)
        // console.log(children)
        return children
    }
    else{
        return <Navigate to={"/login"} replace></Navigate>
    }
 
}

export default RequiredAuth