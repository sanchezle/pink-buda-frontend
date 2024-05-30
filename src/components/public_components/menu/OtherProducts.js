// OtherProducts.js
import React from 'react';
import './OtherProducts.css';

const otherProducts = [
    {
        id: 1,
        category: 'Starters',
        items: [
            { title: 'Patatas Budas', description: 'French fries with oregano, parmesan, and truffle.', price: '7,00 €' },
            { title: 'Chicken Bites', description: 'Fried chicken pieces with house sauce.', price: '8,50 €' },
            { title: 'Patatas Bravas', description: 'French fries with hot sauce.', price: '6,00 €' },
            { title: 'Tequeños', description: 'Bread dough with fresh cheese (queso blanco) stuffed in the middle.', price: '7,50 €' }
        ]
    },
    {
        id: 2,
        category: 'Sides',
        items: [
            { title: 'French Fries', price: '2,75 €' },
            { title: 'Sweet Potato', price: '3,50 €' },
            { title: 'Onion Rings', price: '4,50 €' },
            { title: 'Coleslaw', price: '2,50 €' }
        ]
    },
    {
        id: 3,
        category: 'Sauces',
        items: [
            { title: 'Pink', price: '1,00 €' },
            { title: 'BBQ', price: '1,00 €' },
            { title: 'Trufa', price: '1,00 €' },
            { title: 'Chimimayo', price: '1,00 €' },
            { title: 'Mayosriracha', price: '1,00 €' },
            { title: 'Mostaza Dulce', price: '1,00 €' }
        ]
    },
    {
        id: 4,
        category: 'Drinks',
        items: [
            { title: 'Water', price: '2,20 €' },
            { title: 'Sparkling Water', price: '2,50 €' },
            { title: 'Soda', price: '2,60 €' },
            { title: 'Bottle Juice', price: '2,50 €' }
        ]
    },
    {
        id: 5,
        category: 'Alcoholic Drinks - Beers',
        items: [
            { title: 'Caña', price: '2,10 €' },
            { title: 'Daura', price: '2,60 €' },
            { title: 'Clara', price: '2,60 €' },
            { title: 'Glass of Beer', price: '2,60 €' },
            { title: 'Jarra', price: '4,00 €' },
            { title: 'Heineken', price: '3,00 €' },
            { title: 'Corona', price: '3,00 €' },
            { title: '0.0%', price: '2,60 €' },
            { title: 'Voll Damm', price: '2,90 €' }
        ]
    },
    {
        id: 6,
        category: 'Others',
        items: [
            { title: 'Wine', price: '3,00 €' },
            { title: 'Vermut', price: '4,00 €' },
            { title: 'Campari', price: '6,00 €' },
            { title: 'Aperol', price: '6,00 €' },
            { title: 'Ron', price: '7,00 €' },
            { title: 'Vodka', price: '7,00 €' },
            { title: 'Baileys', price: '4,00 €' },
            { title: 'Gintonic', price: '7,00 €' },
            { title: 'Whiskey', price: '7,00 €' },
            { title: 'Sangria Glass', price: '4,00 €' },
            { title: 'Shot Tequila', price: '3,50 €' },
            { title: 'Shot Jagger', price: '3,50 €' }
        ]
    }
];

const OtherProducts = () => {
    return (
        <div className="other-products">
            <div className="container">
                {otherProducts.map(category => (
                    <div key={category.id} className="category">
                        <h2>{category.category}</h2>
                        <ul>
                            {category.items.map((item, index) => (
                                <li key={index}>
                                    <strong>{item.title}</strong>: {item.description ? `${item.description} - ` : ''}{item.price}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OtherProducts;
