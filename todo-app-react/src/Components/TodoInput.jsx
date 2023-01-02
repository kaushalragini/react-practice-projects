import { useState } from "react"
import React from 'react'
import { useDispatch } from "react-redux"
import { getTodoError, getTodoRequest, getTodoSuccess } from "../Redux/action"
import { postTodoRequest, postTodoSuccess } from "../Redux/action"
const TodoInput = () => {
    const [display, setDisplay] = useState("")
    const dispatch = useDispatch()
    return (
        <div>
            <h1>TODO APP</h1>
            <input
                type="text"
                placeholder='add your new tdoos'
                value={display}
                onChange={(e) => {
                    setDisplay(e.target.value)
                }}
            />
            <button onClick={() => {
                dispatch(postTodoRequest())
                dispatch(postTodoSuccess(display))
            }}>ADD</button>
        </div>
    )
}

export default TodoInput
