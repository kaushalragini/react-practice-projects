import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getTodoError, getTodoRequest, getTodoSuccess, postTodoError, postTodoRequest, postTodoSuccess } from '../Redux/Todo/action'
import axios from "axios"
import TodoList from './TodoList'
import Counter from './Counter'
const TodoInput = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch();
    const getMethod = () => {
        dispatch(getTodoRequest());
        axios.get("http://localhost:8080/posts").then(res => {
            dispatch(getTodoSuccess(res.data));
        }).catch(err => {
            console.log(err)
            dispatch(getTodoError());
        })
    }
    const postMethod = () => {
        const payload = {
            title: input,
            status: false
        }
        dispatch(postTodoRequest());
        axios.post("http://localhost:8080/posts", payload).then((res) => {
            dispatch(postTodoSuccess());
            getMethod();
        }).catch(err => {
            console.log(err);
            dispatch(postTodoError());
        })
    }
    return (
        <div>
            <Counter />
            <input
                type="text"
                placeholder='Add Your Todo List'
                value={input}
                onChange={(e) => {
                    setInput(e.target.value)
                }}
            />
            <button onClick={() => {
                postMethod();
                setInput("");
            }}>ADD</button>
            <TodoList getMethod={getMethod} />
        </div>
    )
}

export default TodoInput
