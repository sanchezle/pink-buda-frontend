import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './images/logonav.png';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div className='header'>
      <nav className='navbar'>
        <a href='/' className='logo'>
          <img src={logo} alt='logo' />
        </a>

        <div className='hamburger' onClick={handleClick}>
          {click ? (
            <FaTimes size={30} />
          ) : (
            <FaBars size={30} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <a href='#carta' onClick={closeMenu}>Carta</a>
          </li>
          <li className='nav-item'>
            <a href='#delivery' onClick={closeMenu}>Delivery</a>
          </li>
          <li className='nav-item'>
            <Link to='/login' onClick={closeMenu}>Login</Link>
          </li>
          <li className='nav-item'>
            <Link to='/reserva' onClick={closeMenu}>Reserva</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
