import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const isAuth = useSelector((state)=> state.AuthReducer.isAuth);

  return (
    <div data-testid="navbar">
      <div data-testid="navbar-home-link">
        <img
          src="/Adidas_Logo.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>
      {!isAuth && (
        <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
        <button data-testid="navbar-login-button">
        <Link to="/login">LOGIN</Link>
        </button>
      </div>
      )}
      
    </div>
  );
};

export default Navbar;
