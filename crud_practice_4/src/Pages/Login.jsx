import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../Redux/AuthData/action'
import { useNavigate, useLocation } from "react-router-dom"
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation();
  console.log("login page location => ", location);
  const comingFrom = location.state?.data || "/"
  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      email,
      password
    }
    if (email && password) {
      dispatch(login(payload)).then((res) => {
        navigate(comingFrom, { replace: true })
        // do something
        // navigate the user back to the home page
      })
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <input type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div>
          <label>User Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
export default Login
