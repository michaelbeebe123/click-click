import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card"> 
        <img alt={props.name} src={props.image} onClick={() => props.clickCount(props.id)}></img>
  </div>
);

export default Card;