import React from 'react'
import axios from 'axios'
const Api = ({ page, limit, sort, order }) => {

    return (
        axios.get(`http://localhost:3000/cities`, {
            params: {
                _page: page,
                _limit: limit,
                _sort: sort,
                _order: order,
            }
        })
    )
}



export default Api

export const addCity = (data) => {
    return axios.post(`http://localhost:3000/cities`, {
        name: data.name,
        population: data.population,
        country: data.country,
    })
}
export const deletCity = (id) => {
    return axios({
        method: "delete",
        baseURL: 'http://localhost:3000',
        url: `/cities/${id}`

    })
}