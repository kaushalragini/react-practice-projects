import React, { useEffect, useState } from 'react'

const postData = (payload) => {
    return fetch(`http://localhost:3000/posts`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
        .then((res) => res.json())
}

const getData = (page = 1) => {
    return fetch(`http://localhost:3000/posts?_limit=10&_page=${page}`)
        .then((res) => res.json())
}

const updateData = (id, patchPayload) => {
    return fetch(`http://localhost:3000/posts/${id}`, {
        method: "PATCH",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(patchPayload)

    }).then((res) => res.json())
}

const deleteData = (id) => {
    return fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' },
    }).then((res) => res.json())
}





const Todo = () => {
    const [text, setText] = useState("")
    const [todo, setTodo] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    useEffect(() => {
        fetchGetMethod(page)
    }, [page])

    const fetchPostMethod = async (payload) => {
        try {
            const result = await postData(payload)

        }
        catch (error) {
            console.log(error)
        }

    }

    const fetchGetMethod = async () => {

        try {
            setLoading(true)
            const result1 = await getData(page)
            setTodo(result1)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const onChangeHandler = (e) => {
        setText(e.target.value)
    }
    const addHandler = () => {
        const payload = {
            "id": Date.now(),
            "title": text,
            "status": false
        }
        fetchPostMethod(payload);
        setText("");
    }
    const clickHandlerNext = () => {
        setPage(page + 1)
    }
    const clickHandlerPrevious = () => {
        setPage(page - 1)
    }
    const toggleHandler = (id, status) => {
        const patchPayload = {
            "status": !status
        }
        updateData(id, patchPayload)
        fetchGetMethod(page)
    }
    const deleteHandler = (id) => {
        deleteData(id);
        fetchGetMethod(page)

    }


    return (
        <div>
            {loading ? ".....loading" : ""}
            <br />
            <input
                value={text}
                type="text"
                placeholder='Enter Your Todo'
                onChange={onChangeHandler} />
            <button onClick={addHandler} >ADD</button>
            <div>
                {
                    todo.map((item) => {
                        return <div key={item.id}>
                            {item.id}
                            {item.title}
                            <button onClick={() =>
                                toggleHandler(item.id, item.status)}>{item.status ? "Done" : "NOT DONE"}</button>
                            <button onClick={() => deleteHandler(item.id)}>Delete</button>
                        </div>

                    })
                }
            </div>

            <div>Current Page:{page}</div>
            <button onClick={clickHandlerNext}>Next</button>
            <button disabled={page <= 0} onClick={clickHandlerPrevious}>Previous</button>

        </div>
    )
}

export default Todo
