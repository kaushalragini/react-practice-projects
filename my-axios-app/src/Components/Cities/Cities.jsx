import React, { useState, useEffect } from 'react'
import AddCities from './AddCities'
import Api from './Api'
import { addCity } from './Api'
import { deletCity } from './Api'

const Cities = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const handleGetCity = (page) => {
        Api({
            page: page,
            limit: 5,
            sort: "population",
            order: "asc"
        })
            .then((res) => {
                console.log(res.data);
                setData(res.data)
            })

    }
    useEffect(() => {
        handleGetCity(page)
    }, [page])
    const handleAddCity = (data) => {
        // make post request here
        addCity(data)
        alert("new city has been added")
        handleGetCity(page)
    }
    const handleDeletecity = (id) => {
        deletCity(id)
        alert("a city has been deleted")
        handleGetCity(page)
    }
    return (
        <div>
            <div>
                <h1>Cities</h1>
                <AddCities handleAddCity={handleAddCity} />
                {data.map((item) => (
                    <div key={item.id}>

                        <li>Population: <b>{item.population}</b>
                            -----Country:<b>{item.country}</b>
                            -------city : <b>{item.name}</b>
                            <button onClick={() => handleDeletecity(item.id)}>Delete</button>
                        </li>


                    </div>
                ))}
            </div>
            <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Prev</button>
            <button disabled={true}>{page}</button>
            <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
    )
}

export default Cities


