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
    message: ""
  };

    // TODO:
    logic = id => {
      let clickedCharacters = this.state.clickedCharacters;
  
      if(clickedCharacters.includes(id)){
        this.setState(
          {
            clickedCharacters: [],
            score: 0,
            message:  "Game Over! You lost. Click to play again!" 
          });
        return;
      }else{
        clickedCharacters.push(id)
  
        if(clickedCharacters.length === 16){
          this.setState(
            {
              score: 16,
              message: "You Won! Great Job, Smartie! Click to play again!",
              clickedCharacters: []
            });
          console.log('You Win');
          return;
        }
  
        this.setState(
          {
              cards,
              clickedCharacters,
              score: clickedCharacters.length,
              message: "" 
          });
  
        for (let i = cards.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [cards[i], cards[j]] = [cards[j], cards[i]];
        }
      }
    }

    // reset = id => {
    //   this.setState({
    //     cards,
    //       score: 0,
    //       highScore: highScore,
    //       winningScore: 16,
    //       clickedCharacters: []
    //   })
    //   return;
    // }

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