import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Filter from "../Components/Filter";
import {useLocation,useSearchParams, Link} from "react-router-dom"
import { getShoes } from "../Redux/AppReducer/action";
import ShoeCard from "../Components/ShoeCard";

const Shoes = () => {
  const dispatch = useDispatch();
  const shoesData = useSelector((state)=>state.AppReducer.shoes);
  const location = useLocation()
  const [searchParams]= useSearchParams();

  useEffect(()=>{
    let getShoesParams;
    if(location || shoesData.length ===0){
      getShoesParams = {
        params: {
          category: searchParams.getAll("category"),
        },
      };
    }
    dispatch(getShoes(getShoesParams))
  },[location])
  return (
    <div>
      <Filter/>
      <div>
        {/* Map through the shoes list here using ShoeCard Component */}
      {shoesData.length>0 && 
      shoesData.map((shoe)=>{
        return (
          <div key= {shoe.id}>
            <Link to={`/shoes/${shoe.id}`}>
              <ShoeCard {...shoe}/>
            </Link>
          </div>
        )
      })}
      
      </div>
    </div>
  );
};

export default Shoes;
