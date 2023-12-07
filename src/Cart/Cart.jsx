import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito()
    }

    return (
        <div className="container">
            <h1 className="main title">Carrito</h1>
            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <h3>{prod.titulo}</h3>
                        <p>Precio por unidad: ${prod.precio}</p>
                        <p>Precio total: ${prod.precio * prod.cantidad}</p>
                        <p>Cantidad:{prod.cantidad}</p>
                        <br />
                    </div>
                ))
            }

            { 
            carrito.length > 0 ?
            <>
                <h2>Precio total: $ {precioTotal()} USD</h2>
                <button onClick={handleVaciar} className="vaciar">Vaciar carrito</button>     
                <Link to="/checkout" className="checkout-link"><button className="finalizar">Finalizar compra</button></Link>
            </> 
            :
            <h2>El carrito esta vacío D:</h2>
            }
        </div>
    )
}

export default Cart