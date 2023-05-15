import React from "react";
import './Card.styles.css'
import { useNavigate , Link } from "react-router-dom";
import Loading from "../Loading/Loading.component";

function Card({ id , name, location, image }) {
  
  if(!id) {
    return(
      <div data-testid = "test-id-1">
      <Loading/>
    </div>
    )
  }

  return (
    <div className="card" data-testid = "test-id-1">
      <div className="card__image">
        <img src={image} alt="" />
      </div>
      <div className="card__content">
        <h3 className="card__title" style={{color :"ButtonText"}}>{name.toUpperCase()}</h3>
        <p className="card__description" style={{color :"GrayText"}}>{location.toUpperCase()}</p>
        <Link className="card__read-more btn btn-primary" to = {`/${id}`}>
            Read More
        </Link>
      </div>
    </div>
  );
}

export default Card;