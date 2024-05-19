import React from 'react';
import './carta.css';
import productos from './productos';

const ProductosCard = ({ producto }) => {
    return (
        <div className="productos-card" onClick={() => window.location.href = producto.url}>
            <div className="productos-card-image">
                <img src={producto.image} alt = "producto" id="pic"></img>
            </div>
            <div className="productos-card-content">
                <h3>{producto.title}</h3>
                <p>{producto.description}</p>
            </div>
        </div>
    );
};
const Carta = ({ producto }) => {
    return (
        <div className="productos">
            <div className="container">
                <h2> C A R T A</h2>
                <div className="content">
                    {productos.map(producto => <ProductosCard key={producto.id} producto={producto} />)}
                </div>
            </div>
        </div>
    );
};

export default Carta;
