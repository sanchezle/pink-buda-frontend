import React from 'react';
import RestaurantMap from './RestaurantMap';
import './Locations.css';

const Locations = () => {
  const restaurants = [
    { name: 'Calle Verdí, 31, Gracia.', lat: 41.40385, lng: 2.15683 },
    { name: 'Calle Sicilia, 334, Sagrada familia.', lat: 41.40332, lng: 2.17132 },
    // Add more restaurants here
  ];

  return (
    <div className="locations" id="locations">
      <div>
      <h1>UBICACIONES</h1>
      </div>
      <div className='content'>
        <div className='addresses2'>
           
            <ul className='addresses'>
              {restaurants.map((restaurant, index) => (
                <li key={index}>{restaurant.name}</li>
        

              ))}
            </ul>
        </div>
        <div className='map'>
        <RestaurantMap restaurants={restaurants} />
        </div>
      </div>
    </div>
  );
};

export default Locations;
