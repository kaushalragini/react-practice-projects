import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Contexts/CartContext'

const Card = () => {
    const {handleCartUpdate} = useContext(CartContext)
  return (
    <div>
      <button onClick={()=>{
        handleCartUpdate(1)
      }}>Buy now!</button>
    </div>
  )
}

export default Card
