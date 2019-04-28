import React from 'react';
import './App.css';

let myScore = 0;
let highScore = 0;

function App() {
  return (
    <div className="App">

      <div className="header">
        <div className="title">Hi there! This is the clicky game!</div>
        <div className="instructions">Start clicking to get started, just don't click the same card twice!</div>
        <div className="scoreBar">
          <div className="score">Current Score: {myScore}</div>
          <div className="score">High Score: {highScore}</div>        
        </div>
      </div>
    {/* Need to make a look that creates cards, each with their own ID so they can be identified easily
    
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
