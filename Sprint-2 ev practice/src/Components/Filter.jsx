import React, {useEffect, useState} from "react";
import {useSearchParams} from 'react-router-dom'
const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
  const [searchParams, setSearchParams] =useSearchParams()
  const [category, setCategory] = useState(
    searchParams.getAll("category")||[]
  );

  const handleChange = (e)=>{
    const option = e.target.value;
    let newCategoryOption = [...category];
    if(category.includes(option)){
      newCategoryOption.splice(newCategoryOption.indexOf(option),1);
    }
    else{
      newCategoryOption.push(option);
    }
    setCategory(newCategoryOption);
  };



  useEffect(()=>{
    if(category){
      setSearchParams({category});
    }
  },[category, setSearchParams])
  return (
    <div style={{
      border: "1px solid black",
      borderRadius: "5px",
      marginLeft: "1rem",
      width: "290px",
    }}>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input 
          type="checkbox" 
          value="Sneakers"
          onChange= {handleChange}
          checked={category.includes("Sneakers")}
           />
          <label>Sneakers</label>
        </div>
        <div>
          <input 
          type="checkbox" 
          value="Loafers" 
          onChange={handleChange}
          checked={category.includes("Loafers")}

          />
          <label>Loafers</label>
        </div>
        <div>
          <input 
          type="checkbox" 
          value="Canvas" 
            onChange={handleChange}
            checked={category.includes("Canvas")}
          />
          <label>Canvas</label>
        </div>
        <div>
          <input 
          type="checkbox" 
          value="Boots"
          onChange={handleChange}
          checked={category.includes("Boots")}
           />
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
