import React from "react"
export const AppContext = React.createContext()
const AppContextProvider = ({ children }) => {
    const [count, setCount] = React.useState(0)

    const clickHandler1 = () => {
        setCount(count + 1)
    }
    const clickHandler2 = () => {
        setCount(count - 1)
    }
    return (
        <AppContext.Provider value={{ count, clickHandler1, clickHandler2 }} >
            {
                children
            }
        </AppContext.Provider>

    )
}
export default AppContextProvider;
