import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postAuthError, postAuthRequest, postAuthSucess } from '../Redux/AuthReducer/action'


const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = () => {
        const payload = {
            email: email,
            password: password
        }
        dispatch(postAuthRequest())
        axios.post("https://reqres.in/api/login", payload).then(res => {
            dispatch(postAuthSucess(res.data))
            console.log(res.data)
        }).catch(err => {
            console.log(err)
            dispatch(postAuthError())
        })
    }
    return (
        <div>
            <label >Email Id :</label>
            <input
                type="email"
                placeholder='Enter Your Email ID'
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
            />
            <label >Password :</label>
            <input
                type="password"
                placeholder='Enter Your Password'
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
            />
            <button onClick={handleLogin}>Login</button>

        </div>
    )
}

export default Login
