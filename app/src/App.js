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

  // TODO:
  clickCount = () => {
    
  }

  // TODO:
  gameOver = () => {
    
  }

  render() {
    return(
    <Wrapper>
      <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
        {/* <Droppable>
          <Draggable> */}
              <div className="grid">
              {this.state.cards.map(card => (
                <Card
                  clickCount={this.clickCount}
                  id={card.id}
                  key={card.id}
                  image={card.image}
                />
              ))}
            </div>
            <br></br>
          {/* </Draggable>
        </Droppable> */}
    </Wrapper>
    )
  }
}

export default App;