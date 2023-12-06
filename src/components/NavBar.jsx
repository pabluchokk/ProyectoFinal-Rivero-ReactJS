import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='navbar'>
            <Link to="/" className='logo'><h1>Carpishop</h1></Link>
            <ul className='menu'>
                <li className="menu-link"><Link to="/">Inicio</Link></li>
                <li className="menu-link"><Link to="/productos">Productos</Link></li>
                <li className="menu-link"><Link to="/productos/medias">Medias</Link></li>
                <li className="menu-link"><Link to="/productos/buzos">Buzos</Link></li>
                <li className="menu-link"><Link to="/productos/remeras">Remeras</Link></li>
                <li className="menu-link"><Link to="/productos/pantalones">Pantalones</Link></li>
                <li className="menu-link"><Link to="/nosotros">Nosotros</Link></li>
                <li className="menu-link"><Link to="/contacto">Contacto</Link></li>

            </ul>
        </nav>
    )
}

export default NavBar