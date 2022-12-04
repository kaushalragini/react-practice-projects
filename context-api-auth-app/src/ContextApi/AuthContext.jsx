import React, { useState, createContext } from "react";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState("");


    const toggleAuth = (getToken = "") => {
        if (isAuth === true) {
            setIsAuth(false);
            setToken("");
        } else {
            setIsAuth(true);
            setToken(getToken);
        }
    };


    return (
        <div>
            <AuthContext.Provider value={{ toggleAuth, isAuth, token }}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthContextProvider
