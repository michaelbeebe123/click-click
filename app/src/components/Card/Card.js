import React from "react";
import "./Card.css";

const Card = props  => (
  <div className="card"> 
        <img alt={props.name} src={props.image} id={props.id}
        onClick={() => props.shuffleCards(props.id)}></img>
  </div>
);

export default Card;