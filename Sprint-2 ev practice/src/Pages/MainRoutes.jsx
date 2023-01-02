import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Shoes from "./Shoes";
import SingleShoe from "./SingleShoe";
import ReqAuth from "../Components/ReqAuth";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Shoes />} />;
      <Route path="/login" element={<Login />} />
      <Route 
      path="/shoes/:id" 
      element={
      <ReqAuth>
        <SingleShoe/>
      </ReqAuth>} 

      />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default MainRoutes;
