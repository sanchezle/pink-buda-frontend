import React from 'react';
import RestaurantMap from './RestaurantMap';
import './Locations.css';
import Pin from './images/location-pin.png'
import minipin from './images/location-pin-mini.png'
import './images/location-pin.png'
import Link from 'react-router-dom';

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
          <img id="location-pin"src={Pin} alt='location pin' className='pin'/>

        <div className='map'>
        <RestaurantMap restaurants={restaurants} />
        </div>
      </div>
      <div className='addresses'>
              <h2><a href="https://www.google.es/maps/place/C%2F+de+Verdi,+31,+Gr%C3%A0cia,+08012+Barcelona/@41.4037934,2.1566978,17z"> &#x2665; C/ Verdí, 31, Gracia</a></h2>
              
              <h2><a href="https://www.google.es/maps/place/C%2F+de+Sic%C3%ADlia,+334,+Eixample,+08025+Barcelona/@41.4033762,2.168834,17z">&#x2665; C/ Sicilia, 334, Sagrada familia</a></h2>
              

       </div>
    </div>
  );
};

export default Locations;
