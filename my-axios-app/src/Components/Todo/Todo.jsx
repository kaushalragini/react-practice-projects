import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Api from './Api'
const Todo = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        Api().then((res) => console.log(res.data)

        )

    }, [])
    return (
        <div>
            TODO
        </div>
    )
}

export default Todo
