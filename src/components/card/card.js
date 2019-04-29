import React from "react";
import "./card.css";


function Card(props) {

  const handleClick = () => {
    props.onClick(props.ident);
  }

  return (
    <div onClick={handleClick} className="wrapper">
      <img src={props.image} alt="card"></img>
    </div>
  )
}

export default Card;