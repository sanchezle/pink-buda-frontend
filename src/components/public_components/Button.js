/*create a 3d pink button component for Nabar.js that when lick sents to '/reserva' with*/
import React from 'react';
import { Link } from 'react-router-dom';
import './button.css';

const Button = () => {
    return (
        <Link to='/reserva' className='btn' >Reserva</Link>
    )
}

export default Button;