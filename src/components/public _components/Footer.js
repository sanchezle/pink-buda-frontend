import React from 'react'
import './Footer.css'
import { FaBars, FaTimes } from 'react-icons/fa'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Reserva</li>
                    <li>Delivery</li>
                    <li>Contacto</li>
                </ul>
                <div className="social-icons">
                    <a href="https://www.instagram.com/pinkbudaburgerbar/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram" ></i>
                    </a>

                    <a href="https://wa.me/+34664050394" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp" ></i>
                    </a>
                    <a href="mailto:sanchezle21@gmail.com" aria-label="Email" class="email-link">
                        <i class="fas fa-envelope"></i>
                    </a>

                </div>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>© 2021 Pink Buda Burger. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
