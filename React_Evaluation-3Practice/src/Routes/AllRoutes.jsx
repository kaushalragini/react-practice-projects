import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Login from "./Login";
import Dashboard from "./Dashboard"
function AllRoutes() {
  return <div>
    {/* Add Home, Login and dashboard  */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </div>;
}

export default AllRoutes;
