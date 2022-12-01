import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import RestaurantCard from "./RestaurantCard";
import LoadingIndicator from "./LoadingIndicator";

const getData = (page = 1) => {
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10`)
    .then((res) => res.json())
}


function Restaurants() {
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState([])
  const [page, setPage] = useState(1)
  const [totalpage, setTotalpage] = useState(0)
  useEffect(() => {
    fetchDataUpdate()

  }, [page])

  const pageUpadate = (value) => {

    setPage(value)
    console.log(value)
  }

  const fetchDataUpdate = async () => {
    try {
      setLoading(true);
      const result = await getData(page)
      console.log(result);
      setValue(result.data)
      setLoading(false);
      setTotalpage(result.totalPages)

    }
    catch (error) {
      console.log(error)
      setLoading(false);
    }
  }


  if (loading === true) {
    return <LoadingIndicator />;
  }
  else {
    return (
      <div>
        <h1 data-testid="restaurants-header">Restaurants List</h1>
        <div data-testid="restaurants-container">
          {value.map((item) => {
            return <div key={item.id}>
              <RestaurantCard
                {...item} />
            </div>
          })}
          {/* Restaurant Card */}

        </div>
        <div>
          {/* Pagination Component */}
          <Pagination onChange={pageUpadate} current={page} total={totalpage} />
        </div>
      </div>
    );
  }
}

export default Restaurants;
