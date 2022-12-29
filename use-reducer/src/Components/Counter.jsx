import React from 'react'
import { useReducer } from 'react'
const Counter = () => {
    const initailState = 1
    const reducer = (state, { type, payload }) => {
        switch (type) {
            default:
                return state
            case "Increment":
                return state + payload
            case "Decrement":
                return state + payload
        }
    }

    const [data, dispatch] = useReducer(reducer, initailState)
    return (
        <div>
            <h1>Count : {data}</h1>
            <button onClick={() => {
                dispatch({ type: "Increment", payload: 1 })
            }}>Increment</button>
            <button disabled={data <= 0} onClick={() => {
                dispatch({ type: "Decrement", payload: -1 })
            }}>Decrement</button>
        </div>
    )
}

export default Counter
