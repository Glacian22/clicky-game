import React from 'react';
import './App.css';
import TitleBar from './components/titleBar/titleBar'
import ScoreField from "./components/scoreField/scoreField"
import Card from "./components/card/card"
import CardArea from "./components/cardArea/cardArea"

const images = [
  "http://static.tumblr.com/6e35e391a99d92051bf5a6e289809a07/02nxold/lfznyt5s6/tumblr_static_dl9xutmk8jcw0kgcok888g8gw.png",
  "https://40.media.tumblr.com/a68d4d221ff0f00b086b51e308c98a0f/tumblr_n5nvgx6NZg1qdi5kdo2_500.png",
  "https://40.media.tumblr.com/5cdb24611d318207ef40eb4cf3352a52/tumblr_nchkpd4oHU1qjhwq1o1_500.png",
  "http://68.media.tumblr.com/4359bd2819188659a9ab07cda508dadc/tumblr_o0wyvkR9Wu1uw74fvo6_1280.png",
  "https://68.media.tumblr.com/0a4b343aac9a737bf7dc80f641535ee9/tumblr_ogtosa2MFo1vctkauo1_400.png",
  "http://68.media.tumblr.com/d37613ae4e10c482b4e7c7b00e204649/tumblr_npyl6jzwqx1uw74fvo7_400.png",
  "http://68.media.tumblr.com/6145ccf7d97d730b1fcff6d37e360db7/tumblr_nz81q7nG8V1r9ee9go6_500.png",
  "https://66.media.tumblr.com/c6b07606dbbff3755945687e9b194155/tumblr_no3cq2XZI11tg7ue6o1_500.jpg",
  "https://68.media.tumblr.com/b582560cd64b3772a217e16038344e39/tumblr_omnhppP9G91v19j17o1_500.png"
]

let clickArr = [];

class App extends React.Component {

  state = {
    title: "Hi there! This is the clicky game!",
    instructions: "Start clicking to get started, just don't click the same card twice!",
    currentScore: 0,
    highScore: 0
  }

  resetScore = () => {
    this.setState({ currentScore: 0 })
  }

  incrementScore = () => {
    // increment score and high score
    if (this.state.currentScore === this.state.highScore) {
      this.setState({
        currentScore: this.state.currentScore + 1,
        highScore: this.state.highScore + 1,
        instructions: "New high score!"
      })

      //increment only score
    } else {
      this.setState({
        currentScore: this.state.currentScore + 1,
        instructions: "Nailed it!"
      })
    }

    // display if all cards have been clicked
    if ((this.state.currentScore + 1) % images.length === 0) {
      this.setState({ instructions: "Level Cleared, cards reset! Keep going!" })
    }
  }

  beenClicked = (id) => {
    console.log("Clicked:", id)

    // check if this card has been clicked, if not increment score and add to tracking array
    if (!clickArr.includes(id)) {
      clickArr.push(id);
      this.incrementScore();
      // clear tracking array if all
      if (clickArr.length === images.length) clickArr = [];
    } else {
      this.resetScore();
      clickArr = [];
      this.setState({
        instructions: "Oops! Try playing again!"
      })
    }
  }

  cards = {
    cardArr: images.map((elem, i) => {
      return <Card
        key={i}
        ident={i}
        image={elem}
        onClick={this.beenClicked}
      />
    })
  }

  render() {
    return (
      // structure of components:
      // app component as entry point
      //    title bar component
      //      two of score component
      //    game div
      //      9 of card component
      <div className="App" >
        <TitleBar
          title={this.state.title}
          instructions={this.state.instructions}>
          <ScoreField message={"Current Score: "} score={this.state.currentScore} />
          <ScoreField message={"High Score: "} score={this.state.highScore} />
        </TitleBar>

        {/* loops over img array and makes a card for each */}
        {/* <div className="cardArea">
          {this.cards.cardArr}
        </div> */}
        <CardArea cards={this.cards.cardArr}/>

      </div>
    );
  }

}

export default App;
