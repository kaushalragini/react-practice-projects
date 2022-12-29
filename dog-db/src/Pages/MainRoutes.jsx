import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from './Login';
const MainRoutes = () => {
    return (
        <div>
            < Routes>
                <Route path="/" element={"home"} />
                <Route path="/login" element={<Login />} />
                <Route path="/category" element={"category"} />
                <Route path="/search" element={"element"} />

            </Routes>
        </div>
    )
}

export default MainRoutes
