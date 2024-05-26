import React from 'react';
import { Link } from 'react-router-dom';
import './Cover.css'; // Import the CSS file
import coverImage from './images/cover2.jpg';

const Cover = ({ imageUrl }) => {
    return (
        <div
            className="cover"
            style={{ backgroundImage: `url(${coverImage})` }}
        >
            <div className="buttons">
                <Link to="/menu" className="button">
                    Menu
                </Link>
                <Link to="/reserva" className="button">
                    Reserva
                </Link>
                <a href="#delivery" className="button">
                    Delivery
                </a>
            </div>
        </div>
    );
};

export default Cover;

