import { useContext } from "react";
import { AuthContext } from "../ContextApi/AuthContext";

const LoginStatus = () => {
    const { isAuth, token } = useContext(AuthContext);
    return (
        <div>
            <h1>{isAuth ? "login" : "logout"}</h1>
            <h2>{token}</h2>
        </div>
    );
};

export default LoginStatus;