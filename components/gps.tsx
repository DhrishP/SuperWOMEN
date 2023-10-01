import React, { useState, useEffect } from 'react';

interface Location {
  latitude: number;
  longitude: number;
}

export const MyComponent = () => {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    // Check if the browser supports the Geolocation API
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // The `position` object contains the current location
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser');
    }
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  if (location) {
    return location
  }else{
    return null
  }

}
