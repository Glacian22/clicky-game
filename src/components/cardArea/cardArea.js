import React from "react";
import "./cardArea.css";

class CardArea extends React.Component {

  state = {
    cards: this.props.cards
  }

  shuffle = () => {
    let cardArr = this.state.cards;
    for (let i = cardArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardArr[i], cardArr[j]] = [cardArr[j], cardArr[i]];
    }
    this.setState({cards: cardArr})
  }

  render() {
    return (
      // when clicked, shuffle cards
      <div className="cardArea" onClick={this.shuffle}>
      {this.state.cards}</div>
    )
  }
}

export default CardArea;