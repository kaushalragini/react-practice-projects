import React from 'react'

export default function AddCartBtn(props) {
    return (
        <div>
            <button onClick={() => props.addToCartBtnHandler()} data-cy="add_to_cart">Add to Cart</button>

        </div>
    )
}
