import React from 'react'
import { Routes, Route } from "react-router-dom"
import SettingsPage from '../Pages/SettingsPage'
import DashboardPage from '../Pages/DashboardPage'
import Home from "../Pages/Home"
import LoginPage from '../Pages/LoginPage'
import PrivateRoutes from '../Components/PrivateRoutes'
const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={
                    <PrivateRoutes>
                        <DashboardPage />
                    </PrivateRoutes>
                } />
                <Route path="/dashboard/setting" element={
                    <PrivateRoutes>
                        <SettingsPage />
                    </PrivateRoutes>
                } />

            </Routes>
        </div>
    )
}

export default MainRoutes
