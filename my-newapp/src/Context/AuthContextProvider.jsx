import React from "react";

export const AuthContext = React.createContext();
const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = React.useState(true);
    function changeAuth() {
        setAuth(!auth);
    }
    return (
        <AuthContext.Provider value={{ auth, changeAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;