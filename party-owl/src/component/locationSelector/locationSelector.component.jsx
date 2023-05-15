import React, { useState } from 'react';
import './locationSelector.styles.css'; // Import CSS file

function LocationSelector({ onLocationSelect }) {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
      }, (error) => {
        console.error(error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  function handleLocationSelect(event) {
    const selectedValue = event.target.value;
    setSelectedLocation(selectedValue);
    onLocationSelect(selectedValue);
  }

  return (
    <div className="location-selector">
      <button onClick={getLocation}>Use current location</button>
      <select onChange={handleLocationSelect}>
        <option value="">Select a location</option>
        <option value="JP Nagar">JP Nagar</option>
        <option value="Koramangala">Koramangala</option>
        <option value="Indiranagar">Indiranagar</option>
        <option value="Whitefield">Whitefield</option>
        <option value="Marathahalli">Marathahalli</option>
        <option value="Sarjapur">Sarjapur</option>
        <option value="Electronic City">Electronic City</option>
        <option value="HSR Layout">HSR Layout</option>
      </select>
      {currentLocation && <p className="location">{`Current location: ${currentLocation.latitude}, ${currentLocation.longitude}`}</p>}
      {selectedLocation && <p className="location">{`Selected location: ${selectedLocation}`}</p>}
    </div>
  );
}

export default LocationSelector;