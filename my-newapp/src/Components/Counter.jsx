import React from 'react'
import { AuthContext } from "../Context/AuthContextProvider";
export default function Counter() {
    const { auth, changeAuth } = React.useContext(AuthContext);
    console.log(auth);
    const style1 = { backgroundColor: "red", height: "100px", width: "100px" }
    const style2 = { backgroundColor: "blue", height: "100px", width: "100px" }
    return (
        <div>
            {auth === false ? "You are not login" : "You are logged in"}
            <button onClick={() => { changeAuth() }}>Click</button>
            <div style={auth === true ? style1 : style2}>
                asasasasasa
            </div>
        </div>
    )
}
