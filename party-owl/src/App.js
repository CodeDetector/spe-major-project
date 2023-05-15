import React from 'react';

import Homepage from './pages/Homepage/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
 Navigate
} from 'react-router-dom';
import Location from './pages/LocationPage/Location';
import BookingForm from './component/BookingForm/BookingForm';

function App() {
 
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< Homepage />}></Route>
        <Route exact path = "/:locId" element = {<Location/>} ></Route>
        <Route exact path = "/:locId/submit" element = {<BookingForm/> } />
        <Route path="*" element={<Navigate to="/" replace />}/>
        {/* <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/contact' element={< Contact />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
