import React, { useState } from 'react'
import { Navigate } from "react-router-dom";
export default function PrivateRoutes({ children }) {
    const [isAuth, setIsAuth] = useState(true);
    if (isAuth === false) {
        return <Navigate to="/login" />
    }
    return (
        <div>
            {children}
        </div>
    )
}
