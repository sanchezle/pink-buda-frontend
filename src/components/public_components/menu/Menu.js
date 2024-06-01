// Menu.js
import React from 'react';
import BurgersGrid from './BurgersGrid';
import OtherProducts from './OtherProducts';
import './Menu.css';

const Menu = () => {
    return (
        <div className="menu">
            <h1>Menú</h1>
            
            <BurgersGrid />
            <OtherProducts />
        </div>
    );
};

export default Menu;


