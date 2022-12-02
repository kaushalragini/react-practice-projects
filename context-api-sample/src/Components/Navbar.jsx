
import { useContext } from 'react'
import { CartContext } from "../Contexts/CartContext"
const Navbar = () => {
    const { cartCount } = useContext(CartContext)
    return (
        <div>
            Cart : {cartCount}
        </div>
    )
}

export default Navbar
