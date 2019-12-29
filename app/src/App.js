import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Card from "./components/Card";
import cards from "./cards.json";
// import Droppable from './DND/Droppable';
// import Draggable from './DND/Draggable';

class App extends Component {
  state = {
    cards,
      score: 0,
      highScore: 0,
      // clickCount: 0,
      winningScore: 16,
      clickedCharacters: []
  };

    // TODO:
    shuffleCards = id => {
      let clickedCharacters = this.state.cards.clickedCharacters;
      let score = this.state.cards.score;
      let highScore = this.state.cards.highScore

      if (clickedCharacters.includes(id)) {
        alert("Game over, your score is " + this.state.score)
        this.reset();
      }

      else {
        clickedCharacters.push(id)
        this.setState({
          score: clickedCharacters.length
        })
        if (clickedCharacters.length === 16) {
          alert("You win!");
          return;
        }
        // FIXME: 
        else if (score >= highScore) {
          this.setState({
            highScore: score
          })
        }
        for (let i = clickedCharacters.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          // [clickedCharacters[i], clickedCharacters[j] = clickedCharacters[j], clickedCharacters[i]];
        }
      }
    }

    // TODO:
    reset = () => {
      this.setState({
        score: 0,
        clickCount: 0,
        clickedCharacters: []
      })
      return;
    }

    render() {
      return(
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
          <div className="grid">
          {this.state.cards.map(card => (
            <Card
              // clickCount={this.clickCount}
              id={card.id}
              key={card.id}
              image={card.image}
            />
          ))}
        </div>
        <br></br>
      </Wrapper>
      )
    }
}

export default App;