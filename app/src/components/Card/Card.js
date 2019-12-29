import React from "react";
import "./Card.css";
// import "../../App";

const Card = props  => (
  <div className="card"> 
        <img alt={props.name} src={props.image} id={props.id} className='logic'
        onClick={ () => props.logic(props.id) } />
  </div>
);

export default Card;