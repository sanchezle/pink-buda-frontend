import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                    <div className='footer-content'>
                    <ul className='links-footer'>
                     
                        <li ><a href='/menu'>Menu</a></li>
                        <li><a href='/reserva'>Reserva</a></li>

                        
                    </ul>


                    <div className="social-icons">
                        <a href="https://www.instagram.com/pinkbudaburgerbar/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram" ></i>
                        </a>

                        <a href="tel:0034 931 97 41 03">
                            <FontAwesomeIcon icon={faPhone} style={{ fontSize: '50px' }}/>
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