import React, { Component } from "react";
import Stars from "./stars";
import Answer from "./answer";
import Button from "./button";
import Numbers from "./numbers";





export class Game extends Component {
  state = {
    selectedNumbers: []
  };

  select = (number) => {
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(number)
    }));
  }
  


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
        <Answer selectedNumbers={this.state.selectedNumbers} />
        </div>
        <br />
        <Numbers selectedNumbers={this.state.selectedNumbers} select={this.select} />
        </div>
      </div>
    );
  }
}

export default Game;
