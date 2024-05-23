import React from 'react';
import './carta.css';
import productos from './productos';
import es1 from 'components/public_components/images/menu-es-1.jpg';
import es2 from 'components/public_components/images/menu-es-2.jpg';
import en1 from 'components/public_components/images/menu-english1.jpg';
import en2 from 'components/public_components/images/menu-english-2.jpg';
import cat1 from 'components/public_components/images/menu-catala1.jpg';
import cat2 from 'components/public_components/images/menu-catala2.jpg';


const menuCatalan = [
    cat1, cat2]
const menuEnglish = [
    en1, en2]
 const menuSpanish = [
    es1, es2]
       
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
        <div className="productos" id='carta' >
            <div className="container">
                <h2> Menú</h2>
                <div className="content">
                    {productos.map(producto => <ProductosCard key={producto.id} producto={producto} />)}
                </div>
            </div>
        </div>
    );
};

export default Carta;
