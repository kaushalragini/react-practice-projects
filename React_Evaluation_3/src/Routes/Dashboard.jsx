import Loader from "../Components/Loader";
import { AuthContext } from "../Context/AuthContext"
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Pagination from "../Components/Pagination";
import { useEffect, useState } from "react";
import ProductList from "../Components/ProductList";

const getData = (page, orderBy) => {
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=10&orderBy=${orderBy}`)
    .then((res) => res.json())
}


function Dashboard() {
  const [displayData, setDisplayData] = useState([])
  const [loading, setLoading] = useState(false)
  const { isAuth, token, logoutUser } = useContext(AuthContext)
  const [page, setPage] = useState(1)
  const [orderBy, setOrderBy] = useState("asc")
  const [totalPages, setTotalPages] = useState(0)
  useEffect(() => {
    setLoading(true)
    getData(page, orderBy)
      .then(res => {

        // console.log(res, res.data)
        setDisplayData(res.data)
        setLoading(false)
        setTotalPages(res.totalPages)

      })
      .catch((err) => {
        // console.log(err)
        setLoading(false)
      });

  }, [orderBy, page])
  // console.log(displayData)
  const clickHandler = () => {
    logoutUser()
  }
  const clickHandlerbutton = () => {
    if (orderBy === "asc") {
      setOrderBy("desc")
    }
    else {
      setOrderBy("asc")
    }
  }
  if (!isAuth) {
    return < Navigate to="/login" />
  }
  const pageHandler = (value) => {
    setPage(page + value)
  }


  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={clickHandler} >Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <br />
      <div data-testid="sort-container">
        <button data-testid="low-to-high" disabled={orderBy === "asc" ? "disabled" : ""}
          onClick={clickHandlerbutton}


        >Sort low to high</button>
        <button data-testid="high-to-low" disabled={orderBy === "desc" ? "disabled" : ""}
          onClick={clickHandlerbutton}>Sort high to low</button>
      </div>
      <br />
      <br />
      {/* add Pagination component  */}
      <Pagination totalPages={totalPages} page={page} pageHandler={pageHandler} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {


          loading && <Loader />
        }
        <ProductList products={displayData} />
        {/* Product Listing, remember to show loading indicator when API is loading */}
      </div>

    </div>
  );
}

export default Dashboard;
