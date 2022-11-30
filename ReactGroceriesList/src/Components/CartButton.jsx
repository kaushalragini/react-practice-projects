import React, { useState } from 'react'

const CartButton = () => {
    const [count, setCount] = useState(0)
    const incHandler = () => {
        setCount(count + 1)
    }
    const decHandler = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <div className="change_quantity_container">
                <button data-cy="inc_btn" onClick={incHandler}>+</button>
                <button disabled={count <= 0} data-cy="dec_btn" onClick={decHandler}> -</button>
                <p className="quantity">{count}</p>
            </div>
        </div>
    )
}

export default CartButton
