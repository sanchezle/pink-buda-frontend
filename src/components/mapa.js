import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Restaurante from './Restaurante'; // Import your restaurant list

const mapContainerStyle = {
  height: "400px",
  width: "800px"
};

const center = {
  lat: 41.3851,
  lng: 2.1734
};

const RestaurantMap = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [closestRestaurant, setClosestRestaurant] = useState(null);

  useEffect(() => {
    // Get user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      () => {
        console.error("Error fetching user location");
      }
    );
  }, []);

  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLng = (lng2 - lng1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const handleMapClick = useCallback(() => {
    if (userLocation) {
      let minDistance = Infinity;
      let nearestRestaurant = null;

      Restaurante.forEach((restaurant) => {
        const distance = calculateDistance(
          userLocation.lat,
          userLocation.lng,
          restaurant.lat,
          restaurant.lng
        );

        if (distance < minDistance) {
          minDistance = distance;
          nearestRestaurant = restaurant;
        }
      });

      setClosestRestaurant(nearestRestaurant);
    }
  }, [userLocation]);

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={13}
        onClick={handleMapClick}
      >
        {Restaurante.map((restaurant) => (
          <Marker
            key={restaurant.id}
            position={{ lat: restaurant.lat, lng: restaurant.lng }}
            title={restaurant.title}
          />
        ))}
        {userLocation && (
          <Marker
            position={userLocation}
            icon={{ url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" }}
          />
        )}
      </GoogleMap>
      {closestRestaurant && (
        <div>
          <h3>Closest Restaurant:</h3>
          <p>{closestRestaurant.title}</p>
          <p>{closestRestaurant.addres}</p>
        </div>
      )}
    </LoadScript>
  );
};

export default RestaurantMap;
