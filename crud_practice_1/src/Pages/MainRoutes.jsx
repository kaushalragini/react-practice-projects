import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Books from './Books'
import EditBook from './EditBook'
import Login from './Login'
import SingleBook from './SingleBook'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/book/:id" element={<SingleBook />} />
            <Route path="/book/:id/edit" element={<EditBook />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={"Page not found"} />
        </Routes>
    )
}

export default MainRoutes
