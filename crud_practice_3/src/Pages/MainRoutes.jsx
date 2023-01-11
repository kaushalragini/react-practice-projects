import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Books from './Books'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Books />} />
            <Route path='/books/:id' element={"single Book"} />
            <Route path="books/:id/edit" element={"EditBook"} />
            <Route path='/login' element={"login"} />
            <Route path='*' element={<h3>Page Not Found</h3>} />
        </Routes>

    )
}

export default MainRoutes
/*

<Route path="/" element={<Books />} />
  <Route path="/books/:id" element={<SingleBook />} />
  <Route path="/books/:id/edit" element={<EditBook />} />
  <Route path="/login" element={<Login />} />
  <Route path="*" element={<h3>Page Not Found</h3>} />

*/