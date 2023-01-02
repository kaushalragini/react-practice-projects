import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addHandler, reduceHandler } from '../Redux/action'
const Counter = () => {
    const dispatch = useDispatch()
    const data = useSelector(store => store)

    return (
        <div>
            <h1>Counter :{data} </h1>
            <button onClick={() => {
                dispatch(addHandler(3))
            }}>Add</button>
            <button onClick={() => {
                dispatch(reduceHandler(2))
            }}>Reduce</button>
        </div>
    )
}

export default Counter
