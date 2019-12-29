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
      highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over. \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = () => {
    this.state.cards.find((x, i) => {
      if (x.id === cards.id) {
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }

  render() {
    return(
    <Wrapper>
      <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
        {/* <Droppable>
          <Draggable> */}
              <item>
              {this.state.cards.map(card => (
                <Card
                  clickCount={this.clickCount}
                  id={card.id}
                  key={card.id}
                  image={card.image}
                />
              ))}
            </item>
          {/* </Draggable>
        </Droppable> */}
    </Wrapper>
    )
  }
}

export default App;