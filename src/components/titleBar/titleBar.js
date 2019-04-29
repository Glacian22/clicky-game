import React from "react";
import "./titleBar.css";
// import ScoreField from "../scoreField/scoreField"

function TitleBar(props) {

  return (
    <div className = "header" >
    <div className="title">{props.title}</div>
    <div className="instructions">{props.instructions}</div>
    <div className="scoreBar">
      {props.children}
    </div>
  </div>
  );
}

export default TitleBar;