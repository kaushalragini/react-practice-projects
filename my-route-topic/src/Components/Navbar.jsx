import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
      <Link to="/">Home</Link>

      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/users">Users</Link>
    </div>
  )
}

export default Navbar
