import React from 'react';
import { Link } from 'react-router-dom';

import coverImage from './images/cover2.jpg';

const Cover = ({ imageUrl }) => {
    const coverStyle = {
        backgroundImage: `url(${coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center', // Align buttons to the bottom
        alignItems: 'flex-end', // Center horizontally
        position: 'relative' // To position buttons correctly
    };

    const buttonStyle = {
        backgroundColor: 'transparent',
        border: '3px solid white', // Thick white border
        color: 'white',
        fontWeight: 'bold',
        padding: '10px 20px',
        margin: '20px'

    };
    const buttons2Style = {
        display: 'flex',
        Width: '10%',
        height: '50px',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: '10%',
        gap: '10px'
    };

    return (
        <div style={coverStyle}>
            {/* Add buttons with appropriate routes */}
                <div class="buttons" style={buttons2Style}>
                <Link to="/reserva" style={buttonStyle}>
                    Reserva
                </Link>
                <Link to="/menu" style={buttonStyle}>
                    Menu
                </Link>
                <Link to="delivery" style={buttonStyle}>
                    Delivery
                </Link>
                </div>
        </div>
    );
};

export default Cover;
