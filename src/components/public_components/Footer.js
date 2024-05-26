import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

const phoneIconStyle = {
    fontSize: '50px',
    color: 'black'

}

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                    <div className='footer-content'>



                    <div className="social-icons">
                        <a href="https://www.instagram.com/pinkbudaburgerbar/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram" ></i>
                        </a>
                        <a href="https://www.facebook.com/pinkbudaburgerbar" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} style={phoneIconStyle}/>
                        </a>

                        <a href="tel:0034 931 97 41 03">
                            <FontAwesomeIcon icon={faPhone} style={phoneIconStyle}/>
                        </a>
                        <a href="mailto:pinkbuda@gmail.com" aria-label="Email" class="email-link">
                            <i class="fas fa-envelope"></i>
                        </a>

                    </div>
                </div>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>© 2024 Pink Buda Burger. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer