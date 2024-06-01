// Menu.js
import React from 'react';
import BurgersGrid from './BurgersGrid';
import OtherProducts from './OtherProducts';
import './Menu.css';

const Menu = () => {
    return (
        <div className="menu">
            <h1>Menu</h1>
            
            <BurgersGrid />
            <OtherProducts />
            <button onClick={() => window.location.href = '/'}>Home</button>
        </div>
    );
};

export default Menu;


