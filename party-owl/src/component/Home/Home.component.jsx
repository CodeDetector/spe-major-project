import React, { useState, useEffect } from 'react';
import './Home.styles.css';
import Card from '../Card/Card.component';

import LocationSelector from '../locationSelector/locationSelector.component';
import Header from '../Header/Header';

const Home = ({allLocations}) => {
  const [clubs, setClubs] = useState(allLocations);
  const [selectedLocation , setSelectedLocation] = useState(null)

  useEffect(function() {
    if (selectedLocation) {
      const filteredClubs = allLocations.filter(club => { 
        return club.city === selectedLocation;
      });
      setClubs(filteredClubs);
    } else {
      setClubs(allLocations);
    }
  }, [selectedLocation]);

  function handleLocationSelect(selectedLocation) {
    setSelectedLocation(selectedLocation);
  }


  return (
    <div className='container' data-testid="test-id-1">
      <Header/>
      <div style = {{margin : "20px" ,display:"block" , width:"100%" , height : "100%"}}>
        <LocationSelector onLocationSelect={handleLocationSelect} />
        <div style={{display : 'flex' , flexWrap:"wrap" , padding : "10px" , width : "100%" , justifyContent:"space-between" ,justifyItems:"flex-start"}}>
        {
          clubs.map(function(item) {
          return (
            <div key={item._id}>
              <Card name = {item.name} location = {item.address} image = {item.images[0]} id = {item._id}/>
            </div>
          );
        })}
        </div>
      </div>    
    </div>
    
  );
}

export default Home;