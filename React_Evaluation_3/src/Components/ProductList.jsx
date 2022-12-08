import React from "react";
import ProductItem from "./ProductItem";

// create Product component which contains the list of ProductItem component
const ProductList = ({ products = [] }) => {
  return <div data-testid="products-container">{products.map((item) => {
    return <ProductItem key={item.id} {...item} />
  })}</div>;
};

// export
export default ProductList;
