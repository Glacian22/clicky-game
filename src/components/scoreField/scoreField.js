import React from "react";
import "./scoreField.css";

class ScoreField extends React.Component {

  state = {
    score: this.props.score
  }

  render (){
    return(
      <div className="score">{this.props.message} {this.state.score}</div>
    )
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.score!==prevState.score){
      return{score: nextProps.score}
    }
    else
    return null;
  }
}

export default ScoreField;