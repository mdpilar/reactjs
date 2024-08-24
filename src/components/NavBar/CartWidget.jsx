import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { HiShoppingCart } from "react-icons/hi";
import "./NavBar.css"

const CartWidget = () => {

    const { cantidadTotal } = useContext(CartContext)
  
    let cantidad = cantidadTotal()
  
    return (
      <Link to="/carrito" className="cartwidget">
        <HiShoppingCart size={35} />
        <p>{ cantidad > 0 && cantidad }</p>
      </Link>
    )
  }
  export default CartWidget