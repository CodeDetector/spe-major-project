import Button from 'react-bootstrap/Button';
import React from "react";
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const BookingBox = ({id , avail , entryfee , organiser}) =>{ 
    var InterestedCnt = 100 ; 
    var isAvailable = avail ; 
    var Popularity = 0.99  ; 
    var EntryFees = entryfee ; 
    var Organiser = organiser;
    // console.log("Avaial : "  , avail )
    const navigate = useNavigate() 

    return(
        <div className="booking-container" data-testid = "test-id-1"   style = {{width : "100%" , height : "70%"}}>
            <Card style = {{margin : "5px" , width : "100%"}}>
            <Card.Body style= {{display : "flex" , justifyContent:"space-evenly" , alignContent:"center"}}>
                <p>Interested : {InterestedCnt}</p>
                {
                    isAvailable ? <p>AVAILABLE: {isAvailable}</p> : <p>UNAVAILABLE</p>
                }
                <p>Popularity : {Popularity*100}% </p></Card.Body>
            </Card>
            
            <Card style = {{ width : "100%"}}>
                <Card.Body>
                <h3 style = {{color : 'black'}}>Quick Look </h3>
                <p style ={{color : 'grey'}}>Offers . Indoor Adventures . Food & Drinks . Sports</p>
                <p>Tuesday, 09 May , 07:00 PM</p>
                {
                    EntryFees ? <p>${EntryFees}</p> : <p>Free Entry</p>
                }
                <hr/>
                <p>Organised By : {Organiser}</p>
                <hr/>
                <p>Special Details : Guest list closes at 9:30 PM. Cover charges applicable at the venue post 9:30 PM for couples.</p>
                </Card.Body>
            </Card>
            <Button variant="danger" size="lg" style={{marginLeft : "10px" ,  width : "100%" , marginTop : "10px"}} onClick={()=>navigate(`/${id}/submit`)}> Book </Button>
            {/* <BookingForm/> */}
        </div>
    )
}

export default BookingBox ; 