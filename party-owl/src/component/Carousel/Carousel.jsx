import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Loading from '../Loading/Loading.component';
// import './Carousel.css'
// // import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselComp = ({images}) => {

  if(!images) 
  {
    return(
      <Loading data-testid="test-id-1"/> 
    )
  }
  return (
    <Carousel data-testid="test-id-1" className = "CarouselContainer">
      {
        images.map((image)=> 
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image}
            alt="Slide"
          />
        </Carousel.Item>)
      }
    </Carousel>
  );
}

export default CarouselComp;