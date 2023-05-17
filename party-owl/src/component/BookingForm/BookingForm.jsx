import axios from 'axios'
import React, { useEffect, useState } from 'react';
import './BookingForm.css';
import { useNavigate, useParams , useLocation, redirect } from 'react-router-dom';



function BookingForm() {
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [noOfGuests, setNoOfGuests] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [date, setDate] = useState('');
  const [bookingStatus , setBookingStatus] =  useState(false ) ;
  const [locData , setlocData] = useState([]) ; 
  const uri = "http://localhost:5000/" 
  
  const params= useParams()

  useEffect(()=>{
  
    axios.get(`${uri}location/getLocation` ,{
      params:{ 
        ID : params.locId
      }
    } ).then((result) => {
      setlocData(result.data[0]) ;

      console.log(result.data[0])
     
    })
    .catch((err)=>console.log("error in getting data : " , err )) 
  } ,[] )
  
  useEffect(()=> {
    if(bookingStatus === true ) 
    {
      axios.post(`${uri}location/update` , {
        params : {
          ID : locData._id , 
          SEATS : locData.availability - noOfGuests
        }
      }).then((result) => {
        console.log("Booking confirmed") ;
      })
    }
  } , [bookingStatus])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(noOfGuests > locData.availability) 
    {
      alert('Please enter your name');
      return;
    }
    if (name.trim() === '') {
      alert('Please enter your name');
      return;
    }
  
    if (mobileNo.trim() === '') {
      alert('Please enter your mobile number');
      return;
    }
  
    if (noOfGuests.trim() === '') {
      alert('Please enter the number of guests');
      return;
    }
  
    
    if (timeSlot.trim() === '') {
      alert('Please select a time slot');
      return;
    }

    window.alert(`Booking confirmed for ${name}, ${mobileNo}, ${noOfGuests} guests on ${date} at ${timeSlot}`);
    console.log(locData)
    setBookingStatus(true) ; 
    
    // If all fields are valid, submit the form
    // Do something with the form data
  };
  

  

  const timeSlots = [
    '9:00 AM',
    '9:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
    '3:30 PM',
    '4:00 PM',
    '4:30 PM',
    '5:00 PM',
    '5:30 PM',
    '6:00 PM',
    '6:30 PM',
    '7:00 PM',
    '7:30 PM',
    '8:00 PM',
    '8:30 PM',
    '9:00 PM',
    '9:30 PM',
    '10:00 PM',
  ];

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Mobile No.:
        <input
            type="text"
            value={mobileNo}
            pattern="[0-9]*"
            onChange={(e) => setMobileNo(e.target.value)}
        />
        </label>
        
        <label>
        No. of Guests:
        <input
            type="number"
            value={noOfGuests}
            min="1"
            max = {locData.availability}
            onChange={(e) => setNoOfGuests(e.target.value)}
        />
        </label>

      {/* <label className="date-field">
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label> */}
      <label>
        Time Slot:
        <select value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)}>
          <option value="">Select a time slot</option>
          {timeSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookingForm;
