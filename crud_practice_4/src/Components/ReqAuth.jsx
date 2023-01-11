// if the useer is Authenticated
// if yes naviagte to him protected route
// else login page
import { useSelector } from 'react-redux'
import { Navigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
export const RequireAuth = ({ children }) => {
    const location = useLocation()
    const isAuth = useSelector(store => store.AuthReducer.isAuth)
    const token = useSelector(store => store.AuthReducer.token)
    if (false) {
        return <Navigate to="/login" replace={true} state={{ data: location.pathname }} />
    }

    return children;
}