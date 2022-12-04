import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../Components/Home'
import AllProducts from '../Components/AllProducts'
import ProductDetail from '../Components/ProductDetail'
const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<AllProducts />} />
            <Route path='/products/:id' element={<ProductDetail />} />
            <Route path='*' element={<h2>ERROR 404 </h2>} />
        </Routes>
    )
}

export default AllRoutes
