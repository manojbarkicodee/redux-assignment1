import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtodo } from '../store/todo/action'

const Todo = () => {
  let dispatch=useDispatch()
  let {todo}=useSelector((state)=>state.todo)
  console.log(todo)
  let ref=useRef()
  let addnew=()=>{
    let value=ref.current.value
    console.log(value)
    dispatch(addtodo(value))
  }
  return (
    <div>
        <input ref={ref}  type="text" />
        <button onClick={addnew}>add</button>
        {
          todo.map((el)=>(
<div>{el}</div>
          ))
        }
    </div>
  )
}

export default Todo