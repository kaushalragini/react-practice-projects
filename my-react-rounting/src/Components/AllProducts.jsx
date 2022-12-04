import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const getId = () => {
    return fetch(`http://localhost:3001/posts`)
        .then((res) => res.json())
}



const AllProducts = () => {
    const [value, setValue] = useState([])
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const result = await getId()
            console.log(result)
            setValue(result)

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            {value.map((item) => {
                return <div key={item.id}>{item.id}--------{item.name}=------{item.price}
                    <Link to={`/products/${item.id}`}>Show More</Link>
                </div>
            })}
        </div>
    )
}

export default AllProducts
