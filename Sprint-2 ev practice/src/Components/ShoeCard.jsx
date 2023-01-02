import React from "react";

//Get the shoe card data from props
const ShoeCard = ({id: shoeId, name, image, category }) => {
  return (
    <div data-testid={`shoe-card-wrapper-${shoeId}`}>
      <div>
        <img data-testid="shoe-card-image" src={image} alt="" />
      </div>
      <div>
        <div data-testid="shoe-name">{name}</div>
        <div data-testid="shoe-category">{category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;
