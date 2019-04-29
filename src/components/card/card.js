import React from "react";
import "./card.css";


function Card(props) {

  let clicked = false;

  const handleClick = () => {

    props.onClick(props.ident, clicked);
    if(!clicked) clicked = !clicked;
  }

  return (
    <div onClick={handleClick} className="wrapper">
      <img src={props.image} alt="card"></img>
    </div>
  )
}

export default Card;