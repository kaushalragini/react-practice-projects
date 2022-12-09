import Loader from "../Components/Loader";
import Pagination from "../Components/Pagination"
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Context/AuthContext"
import { Navigate } from "react-router-dom";
import { ProductList } from "../Components/ProductList"


const getData = async (page, orderBy) => {
  const res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`);
  return await res.json();
}
function Dashboard() {
  const [page, setPage] = useState(0)
  const [orderBy, setOrderBy] = useState("asc")
  const [displayData, setDisplayData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    fetchHandler()
    

  }, [])
  const { logoutUser, token } = useContext(AuthContext)
  const logoutClickHandler = () => {
    logoutUser()
  }
  const fetchHandler = async () => {
    setIsLoading(true)
    try {
      const result = await getData(page, orderBy)
      console.log(result)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
      setIsLoading(false)
    }

  }
  const clickHandlerButton = () => {
    if (orderBy === "asc") {
      setOrderBy("desc")
    }
    else {
      setOrderBy("asc")
    }
  }
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logoutClickHandler}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <br />
      <div data-testid="sort-container">
        <button data-testid="low-to-high" disabled={orderBy === "asc" ? "disabled" : ""} onClick={clickHandlerButton}>Sort low to high</button>
        <button data-testid="high-to-low" onClick={clickHandlerButton} disabled={orderBy === "desc" ? "disabled" : ""}>Sort high to low</button>
      </div>
      <br />
      <br />
      {/* add Pagination component  */}
      <Pagination />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Loader />

        {/* Product Listing, remember to show loading indicator when API is loading */}
      </div>

    </div>
  );
}

export default Dashboard;
