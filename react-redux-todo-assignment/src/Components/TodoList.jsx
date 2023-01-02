import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const TodoList = ({ getMethod }) => {
    const data = useSelector((store) => {

        return store.TodoReducer.todos;
    });
    useEffect(() => {
        getMethod();
    }, [])
    return (
        <div>
            {data && data.length && data.map(item => {
                return <div key={item.id}>
                    <li>{item.id}----{item.title}</li>
                </div>
            })}
        </div>
    )
}

export default TodoList
