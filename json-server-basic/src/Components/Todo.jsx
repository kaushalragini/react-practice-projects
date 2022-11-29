import React, { useState } from 'react'

const getTodo = (payload) => {
    // complete it using fetch
    return fetch(`http://localhost:3000/todo`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(payload)
    })
        .then((res) => res.json())
}
const displayTodo = () => {
    return fetch(`http://localhost:3000/todo`)
        .then((res) =>
            res.json()
        )
}

export default function Todo() {
    const [data, setData] = useState("")
    const [value, setValue] = useState([])


    const fetchUpadte = async () => {
        const payload = {
            id: Date.now(),
            title: data,
            status: false,
        }
        await getTodo(payload)


    }


    const onChangeHandler = (e) => {
        // complete it
        let value = e.target.value
        setData(value)

    }
    const onAddHandler = () => {
        // complete it
        fetchUpadte()

    }
    const fetchHandler = async () => {
        const newData = await displayTodo()
        console.log(newData)
        setValue(newData)

    }

    const getdataHandler = () => {
        fetchHandler()
    }

    return (
        <div>
            <h2>Add Todo's</h2>
            <input
                value={data}
                onChange={onChangeHandler}
                type="text"
            />
            <h1>{
                value.map(
                    (item) => {
                        return <li key={item.id}>{item.title}</li>
                    })
            }</h1>
            <button onClick={onAddHandler}>Add</button>
            <button onClick={getdataHandler}>Get Post</button>

        </div>
    )
}
