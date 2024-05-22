import React from 'react'
import './Footer.css'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                    <div className='footer-content'>
                    <ul>
                     
                        <li>Menu</li>
                        <li>Reserva</li>
                        <li>Delivery</li>
                        <li>Contacto</li>
                    </ul>


                    <div className="social-icons">
                        <a href="https://www.instagram.com/pinkbudaburgerbar/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram" ></i>
                        </a>

                        <a href="https://wa.me/+" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-phone" ></i>
                        </a>
                        <a href="mailto:pinkbuda@gmail.com" aria-label="Email" class="email-link">
                            <i class="fas fa-envelope"></i>
                        </a>

                    </div>
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