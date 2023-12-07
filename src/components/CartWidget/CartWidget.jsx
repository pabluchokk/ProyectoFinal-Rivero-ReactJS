import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import * as Icon from 'react-bootstrap-icons'

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext)

    return (
        <div>
            <Link className="menu-link" to="/cart">
                <Icon.Cart />
                <span className="numerito"> {cantidadEnCarrito()}</span>
                </Link>
        </div>
    )
}

export default CartWidget