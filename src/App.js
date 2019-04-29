import React from 'react';
import './App.css';
import TitleBar from './components/titleBar/titleBar'
import ScoreField from "./components/scoreField/scoreField"

let title = "Hi there! This is the clicky game!";
let instructions = "Start clicking to get started, just don't click the same card twice!";
let currentScore = 0;
let highScore = 0;
let numCards = 9;

// function updateScore() {
//   if (alreadyClicked) {
//     instructions = "Oops, you already clicked that one. Try the game again!";
//   } else {
//     currentScore++;
//     if (currentScore > highScore) highScore = currentScore;
//     if (currentScore === numCards) instructions = "Level Cleared, cards reset! Keep going!";
//   }
// }
setInterval(()=>{currentScore++; console.log(currentScore)}, 1000)
function App() {
  return (

    // structure of components:
    // app component as entry point
    //    title bar component
    //      two of score component
    //    game div
    //      12 of card component
    <div className="App">
      <TitleBar
        title={title}
        instructions={instructions}>
        <ScoreField message={"Current Score: "} score={currentScore} />
        <ScoreField message={"High Score: "} score={highScore} />
      </TitleBar>

      {/* Need to make a loop that creates cards, each with their own ID so they can be identified easily
    
    Each card has an image, and an onclick function. 
    
    Onclick will check if it's been clicked before (boolean flag), and increment score if false. 

    Increment high score if current score > high score

    If alreadyClicked is true, end game by resetting current score
    
    Then randomize card layout.  
    
    */}

    </div>
  );
}

export default App;
