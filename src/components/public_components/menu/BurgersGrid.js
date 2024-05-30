import React from 'react';
import './BurgersGrid.css';
import Burgers from './Burgers';

const BurgersCard = ({ burger }) => {
    return (
        <div className="burgers-card" onClick={() => window.location.href = burger.url}>
            <div className="burgers-card-image">
                <img src={burger.image} alt = "burger" id="pic"></img>
            </div>
            <div className="burgers-card-content">
                <h3>{burger.title}</h3>
                <p>{burger.description}</p>
            </div>
        </div>
    );
};
const BurgersGrid  = ({ burger }) => {
    return (
        <div className="burgers">
            <div className="container">
                <h2> C A R T A</h2>
                <div className="content">
                    {Burgers.map(burger => <BurgersCard key={burger.id} burger={burger} />)}
                </div>
            </div>
        </div>
    );
};

export default BurgersGrid;
