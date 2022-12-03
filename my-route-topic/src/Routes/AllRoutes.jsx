import React from 'react'
import { Routes, Route } from "react-router-dom"
import AllUserPage from "./AllUserPage";
import SingleUserPage from "./SingleUserPage";

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<h1>HOME</h1>} />
        <Route path="/about" element={<h1>about </h1>} />
        <Route path="/users" element={<AllUserPage />} />
        <Route path="/users/:user_id" element={<SingleUserPage />} />
      </Routes>
    </div>
  )
}

export default AllRoute
