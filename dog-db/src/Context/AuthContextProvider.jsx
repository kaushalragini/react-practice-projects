import React, { useState } from 'react'
import { createContext } from 'react'
export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  function toggleAuth() {
    isAuth ? setIsAuth(false) : setIsAuth(true)
  }
  return (
    <AuthContext.Provider value={{ isAuth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
