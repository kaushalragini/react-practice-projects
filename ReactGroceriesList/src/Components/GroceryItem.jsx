import React, { useState } from 'react'
import CartButton from './CartButton'
import AddCartBtn from "./AddCartBtn";

const GroceryItem = ({ id, title, mrp, sellingPrice, discount, imgURL }) => {
    const [cart, setCart] = useState(true);
    function addToCartBtnHandler() {
        setCart(false);
    }
    return (
        <div>
            <div key={id} className="grocery_card">
                <p>{discount}</p>
                <img src={imgURL} alt="" />
                <h2>{title} </h2>

                <p>{mrp} <span>{sellingPrice}</span></p>


            </div>
            {/* <button data-cy="add_to_cart">Add to Cart</button> */}
            {cart === true ? <AddCartBtn addToCartBtnHandler={addToCartBtnHandler} /> : <CartButton />}
        </div>
    )
}

export default GroceryItem
