import React, { Component } from "react";
import Stars from "./stars";
import Answer from "./answer";
import Button from "./button";
import Numbers from "./numbers";





export class Game extends Component {
  state = {
    cards: []
  };


  render() {
    return (
      <div>
        <header className="App-header">Game</header>
        <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
        <Stars />
        <Button />
        <Answer />
        </div>
        <br />
        <Numbers />
        </div>
      </div>
    );
  }
}

export default Game;
