import React from "react";
import ProductItem from "./ProductItem";

// create Product component which contains the list of ProductItem component
const ProductList = ({products=[]}) => {
  return <div data-testid="products-container">{[].map(() => {})}</div>;
};

// export
export default ProductList;
