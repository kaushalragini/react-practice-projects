import { Link, Navigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
const postData = async (emailObject) => {
  return fetch(`https://reqres.in/api/login`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(emailObject)
  })
    .then((res) => res.json())
}
const emailObject = {
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { loginUser, isAuth } = useContext(AuthContext)

  const emailHandler = (e) => {
    setEmail(e.target.value)
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }
  const clickHandler = async (e) => {
    e.preventDefault()

    try {
      const res = await postData(emailObject)
      console.log(res.token);
      loginUser(res.token)
    }
    catch (err) {
      console.log(err);
    }

  }
  if (isAuth) {
    return <Navigate to="/dashboard" />
  }
  return (
    <div className="login-page">
      <form className="form" data-testid="login-form">
        <div>
          <label>
            <input data-testid="email-input" type="email" placeholder="email" onChange={emailHandler} />
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              onChange={passwordHandler}
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit" onClick={clickHandler}>
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;
