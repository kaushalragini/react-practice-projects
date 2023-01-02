import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Add, Reduce } from '../Redux/Counter/action'

const Counter = () => {
    const count = useSelector(store => {
        return store.CountReducer.count
    })
    const dispatch = useDispatch()
    const clickHandler1 = () => {
        dispatch(Add(1))

    }
    const clickHandler2 = () => {
        dispatch(Reduce(-1))
    }
    return (
        <div>
            <h1>Count :{count}</h1>
            <button onClick={clickHandler1}>Add</button>
            <button onClick={clickHandler2}>Reduce</button>
        </div>
    )
}

export default Counter
