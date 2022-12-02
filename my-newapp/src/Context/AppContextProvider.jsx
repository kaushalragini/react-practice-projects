import React from "react";

export const AContext = React.createContext();
const AppContextProvider = ({ children }) => {
    const [count, setCount] = React.useState(1);
    const changeCount = (value) => {
        setCount(count + value);
    }
    const value = { count, changeCount };
    return (
        <AContext.Provider value={value}>
            {children}
        </AContext.Provider>
    )
}

export default AppContextProvider;