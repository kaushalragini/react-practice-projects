import React from "react";
import { Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard";
import Login from "./Login"
import Home from "./Home"
function AllRoutes() {
  return <div>{/* Add Home, Login and dashboard  */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </div>;
}

export default AllRoutes;
