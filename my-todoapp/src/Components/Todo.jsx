import React, { useEffect, useState } from 'react'
const postData = (payload) => {
    return fetch(`http://localhost:3000/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
        .then((res) => res.json())
}
const getData = (page = 1) => {
    console.log(page)
    return fetch(`http://localhost:3000/posts?_limit=2&_page=${page}`)
        .then((res) => res.json())
}

const patchData = (id, patchPayload) => {
    return fetch(`http://localhost:3000/posts/${id}`, {
        method: "PATCH",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(patchPayload)

    }).then((res) => res.json())
}

const Todo = () => {
    const [text, setText] = useState("");
    const [todo, setTodo] = useState([]);
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    useEffect(() => {
        fetchGetData(page)
    }, [page])
    const changeHandler = (e) => {
        setText(e.target.value)
    }
    const fetchUpdate = async (payload) => {
        try {
            let result = await postData(payload)
            fetchGetData(page);
        }
        catch (error) {
            console.log(error)
        }
    }
    const fetchGetData = async (page) => {
        try {
            setLoading(true)
            let result1 = await getData(page)
            setTodo(result1)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    const clickHandler = () => {
        const payload = {
            "id": Date.now(),
            "title": text,
            "status": false
        }
        fetchUpdate(payload)
    }
    const clickHandler1 = () => {
        setPage(page + 1)
    }
    const clickHandler2 = () => {
        setPage(page - 1)
    }
    const toggleHandler = (id, status) => {
        // console.log("id => ", id)
        const patchPayload = {
            "status": !status
        }
        patchData(id, patchPayload)
        fetchGetData(page);
    }
    return (

        <div>
            {loading ? "...loading" : ""}
            <br />
            <input type="text"
                value={text}
                placeholder="Enter Your Text"
                onChange={changeHandler} />

            <button onClick={clickHandler}>ADD</button>
            <div>
                {
                    todo.map((item) => {
                        return <div key={item.id}>
                            {item.id}
                            {item.title}
                            <button onClick={() => toggleHandler(item.id, item.status)} >{item.status ? "Done" : "NOT DONE"}</button>
                            <button>Delete</button>
                        </div>

                    })
                }
            </div>

            <div>Current Page: {page}</div>
            <button onClick={clickHandler1}>Next</button>
            <button disabled={page <= 0} onClick={clickHandler2}>Previous</button>



        </div>
    )
}

export default Todo
