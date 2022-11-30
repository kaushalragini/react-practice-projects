import React from 'react'
import data from '../data.json'
import GroceryItem from './GroceryItem'
const Grocerydetails = () => {
    let newData = data
    console.log(newData)
    return (
        <div>

            <h1>Groceries</h1>
            <div data-cy="container" >
                {
                    newData.map((item) => {
                        return <GroceryItem title={item.title}
                            mrp={item.mrp}
                            sellingprice={item.sellingprice}
                            imgURL={item.imgURL}
                            discount={item.discount}
                            sellingPrice={item.sellingPrice}
                            id={item.id} />
                    })
                }
            </div>
        </div>
    )
}

export default Grocerydetails
