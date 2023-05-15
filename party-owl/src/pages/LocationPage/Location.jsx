import React, { useEffect, useState } from 'react';
import EventDetail from '../../component/EventDetail/EventDetail';
import LocationTabs from '../../component/Tabs/LocationTabs';
import BookingBox from '../../component/BookingBox/BookingBox';
import CarouselComp from '../../component/Carousel/Carousel';

import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../component/Loading/Loading.component';
import Header from '../../component/Header/Header'


const Location = ()=>{

    const [id , setId] = useState(null ) ;
    const [locData , setlocData] = useState([]) ; 
    const uri = "http://localhost:5000/" 
    const [isLoading , setLoading] = useState(true ); 
    const params= useParams()

    useEffect(()=>{
     
      setId(params.locId) 
      axios.get(`${uri}location/getLocation` ,{
        params:{ 
          ID : params.locId
        }
      } ).then((result) => {
        setlocData(result.data[0]) ;

        console.log(result.data[0])
        setLoading(false) ;
      })
      .catch((err)=>console.log("error in getting data : " , err )) 
    } ,[] )
    
    if(isLoading){
      return (<Loading/> )
    }
    else{
        return(
          <div>
            <Header/>
          
        <div className="LocationContainer" style={{display : 'flex' , height : '100vh', paddingLeft : '10%' , paddingRight:'10%'}}> 
        <div className='location-left-container' style={{ float:'left' , width : '50%'  , height:'100%' ,padding: "5px"}}>
          <div className='location-left-event-image' style={{width: '100%', margin:'0%' , height:'50%' }}>
                  <CarouselComp images = {locData.images}/>
                  <EventDetail data = {locData}/> 
          </div>    
          <div style = {{ marginTop : '15%'}}>
          <LocationTabs description={locData.description} venue={locData.Venue} offers={locData.offers} contact={locData.contact}/>
          </div>    
              
        </div>
        <div className='location-right-container' style={{float:'right' , width:'50%' , height:'100%', padding: "5px"}}>
          <BookingBox id = {locData._id} avail={locData.availability} entryfee={locData.entryfee} organiser={locData.name}/>
        </div>
      </div>
      </div>
        )
    }
  
    

} 

export default Location;
