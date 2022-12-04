import React from 'react'

import { useContext } from "react";
import AuthContext from "../ContextApi/AuthContext";
import LoginStatus from "./LoginStatus";

const loginData = () => {
    return fetch(`https://reqres.in/api/login`, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            email: "eve.holt@reqres.in",
            password: "cityslicka"
        })
    })
        .then((res) => res.json())
        .then((res) => {
            return res;
        });
};




const Navbar = () => {

    const { toggleAuth, isAuth } = useContext(AuthContext);
    const clickHandler = async () => {
        try {
            if (isAuth === true) {
                toggleAuth();
            } else {
                const allLoginData = await loginData();
                console.log(allLoginData);
                toggleAuth(allLoginData.token);
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div>

            <button onClick={clickHandler}> {isAuth ? "logout" : "login"}</button>
            <LoginStatus />

        </div>
    )
}

export default Navbar
