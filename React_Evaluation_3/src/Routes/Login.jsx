import { Link } from "react-router-dom";
import React, { useContext, useState } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Navigate } from "react-router-dom";

const postData = (emailObject) => {
  return fetch(`https://reqres.in/api/login`, {
    method: "POST",
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(emailObject)
  }
  )
    .then((res) => res.json())

}

function Login() {
  const [emailId, setEmailId] = useState("")
  const [password, setPassword] = useState("")
  const { loginUser, isAuth } = useContext(AuthContext)
  const idHandler = (e) => {
    setEmailId(e.target.value)
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }
  const loginHandler = (e) => {
    e.preventDefault();
    const emailObject = {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka",
    }
    postData(emailObject)
      .then((res) => {
        // console.log(res.token)
        loginUser(res.token)
      })
  }
  if (isAuth) {
    return < Navigate to="/dashboard" />
  }

  return (



    <div className="login-page">
      <form className="form" data-testid="login-form" onSubmit={loginHandler}>
        <div>
          <label>
            <input data-testid="email-input" type="email" placeholder="email" onChange={idHandler} />
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
          <button data-testid="form-submit" disabled={isAuth === true ? "disabled" : ""} type="submit" >
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
