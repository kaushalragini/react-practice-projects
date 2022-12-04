import React, { useState } from 'react'
import { useEffect } from 'react';
import { json, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
const ProductDetail = () => {
    const [data, setData] = useState({})
    const params = useParams();
    console.log(params);
    useEffect(() => {
        fetch(`http://localhost:3001/posts/${params.id}`)
            .then((res) => res.json())
            .then(res => setData(res))
    }, [])

    if (JSON.stringify(data) === "{}") {
        return <h1> Product does not exist</h1>
    }
    else {
        return (
            <div>
                hello :  {params.id}
                <h1>Name : {data.name}</h1>
                <h2>Price : {data.price}</h2>
                <h3>ID: {data.id}</h3>
                <Link to={"/products"}> go back</Link>
            </div>
        )
    }

}

export default ProductDetail
