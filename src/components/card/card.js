import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="wrapper">
      <img src={props.image} alt="card"></img>
    </div>
  )
}

export default Card;