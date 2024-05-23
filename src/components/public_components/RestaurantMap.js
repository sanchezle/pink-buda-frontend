import React, { useEffect, useRef } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const RestaurantMap = ({ restaurants }) => {
  const mapRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    version: 'beta',
  });

  useEffect(() => {
    if (isLoaded && mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 41.4036, lng: 2.1744 },
        zoom: 12,
        mapId: process.env.MAP_ID, // Add this line
      });

      restaurants.forEach(restaurant => {
        new window.google.maps.marker.AdvancedMarkerElement({
          map,
          position: { lat: restaurant.lat, lng: restaurant.lng },
          title: restaurant.name,
        });
      });
    }
  }, [isLoaded, restaurants]);

  return (
    <div style={{ height: '400px', width: '100%' }} ref={mapRef}></div>
  );
};

export default RestaurantMap;
