import React from 'react'
import { Routes, Route } from "react-router-dom"
import Books from './Books'
import EditBook from './EditBook'
import Login from './Login'
import SingleBook from './SingleBook'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/books/:id" element={<SingleBook />} />
            <Route path="/books/:id/edit" element={<EditBook />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h3>Page Not Found</h3>} />
        </Routes>
    )
}

export default MainRoutes
