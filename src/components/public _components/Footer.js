import React from 'react'
import './Footer.css'

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
                <div className='social'>
                    <a href='https://www.facebook.com/'><i className='fab fa-facebook-f'></i></a>
                    <a href='https://www.instagram.com/pinkbudaburgerbar'><i className='fab fa-instagram'></i></a>
                    <a href='https://www.twitter.com/'><i className='fab fa-twitter'></i></a>
                </div>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2024 PinK Buda Burger, all rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
