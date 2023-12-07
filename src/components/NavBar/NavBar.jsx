import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav className='navbar'>
            <Link to="/" className='logo'><h1>GearNow</h1></Link>
            <ul className='menu'>
                <li><Link to="/productos" className='menu-link'>Productos</Link></li>
                <li><Link to="/productos/PC" className='menu-link'>PC</Link></li>
                <li><Link to="/productos/PS5" className='menu-link'>PS5</Link></li>
                <li><Link to="/productos/Nintendo" className='menu-link'>Nintendo</Link></li>
                <li><Link to="/productos/XBOX" className='menu-link'>XBOX</Link></li>
                <li><Link to="/contacto" className='menu-link'>Contacto</Link></li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    )
}

export default NavBar