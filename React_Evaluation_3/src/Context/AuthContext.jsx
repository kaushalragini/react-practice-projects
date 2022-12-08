import React, { useState } from "react"
export const AuthContext = React.createContext()

function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false)
    const [token, setToken] = useState(null)

    const loginUser = (token) => {
        setIsAuth(true);
        setToken(token)
    }
    const logoutUser = () => {
        setIsAuth(false)
        setToken(null)
    }
    const authState = { loginUser, logoutUser, isAuth, token }

    return (
        <AuthContext.Provider value={{ loginUser, logoutUser, isAuth, token }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider;
