import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './images/logonav2.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      let scrollTop = window.scrollY;
      if (scrollTop > lastScrollTop) {
        // downscroll code
        setIsHidden(true);
      } else {
        // upscroll code
        setIsHidden(false);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isHidden ? 'hidden' : ''}`}>
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
            <Link to='/login' onClick={closeMenu}>Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
