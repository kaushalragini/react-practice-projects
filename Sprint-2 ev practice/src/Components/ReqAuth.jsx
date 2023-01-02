import { useSelector } from "react-redux/es/hooks/useSelector";
import {Navigate, useLocation} from "react-router-dom"
//Create the HOC for protected Routes
const ReqAuth = ({children}) => {
    const isAuth = useSelector((state)=> state.AuthReducer.isAuth)
    const location = useLocation()
    if(!isAuth){
        return <Navigate to="/login" state={{from: location}} replace />
    }
    return children;
};

export default ReqAuth;
