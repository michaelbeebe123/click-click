import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Card from "./components/Card";
import cards from "./cards.json";
import './App.css';
// import Droppable from './DND/Droppable';
// import Draggable from './DND/Draggable';

class App extends Component {
  state = {
    cards,
    score: 0,
    highScore: 0,
    winningScore: 16,
    clickedCharacters: [],
  };

    // MEAT AND POTATOES OF THE APP
    logic = id => {
      let clickedCharacters = this.state.clickedCharacters;
      let score = clickedCharacters.length;
      let highScore = this.state.highScore;
  
      // RUNS WHEN THE PLAYER LOSES/CLICK THE SAME IMAGE TWICE
      if(clickedCharacters.includes(id)){
        // RESETS THE GAME
        this.setState(
          {
            cards,
            score: 0,
            highScore: highScore,
            winningScore: 16,
            clickedCharacters: [],
          });
          alert("Game over!");
        return;
      }
      // RUNS WHEN THE USER CLICKS AN IMAGE FOR THE FIRST TIME
      else{
        clickedCharacters.push(id)
  
        // RUNS WHEN THE USER WINS THE GAME
        if(score === 16){
          this.setState(
            {
              cards,
              score: 0,
              highScore: 16,
              winningScore: 16,
              clickedCharacters: [],
            });
          alert("You Win!");

          return;
        }
  
        // INCREASES THE SCORE
        this.setState(
          {
            cards,
            score: clickedCharacters.length,
            highScore: highScore,
            winningScore: 16,
            clickedCharacters,
          });

        if (score >= highScore) {
          highScore++;
        }
  
        // ORGANIZES THE CARDS IN RANDOM ORDER
        for (let i = cards.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [cards[i], cards[j]] = [cards[j], cards[i]];
        }
      }
    }

    render() {
      return(
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
          <div className="grid">
          {this.state.cards.map(card => (
            <Card
              id={card.id}
              key={card.id}
              image={card.image}
              logic={this.logic}
            />
          ))}
        </div>
        <br></br>
      </Wrapper>
      )
    }
}

export default App;