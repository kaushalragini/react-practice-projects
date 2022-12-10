import React from 'react'
import axios from "axios"
const Api = () => {
    return axios.get(`https://reqres.in/api/users`)
}

export default Api
