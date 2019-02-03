import React, { Component } from "react";
import Stars from "./stars";
import Answer from "./answer";
import Button from "./button";
import Numbers from "./numbers";

export class Game extends Component {
  static randomNumber = () => Math.floor(Math.random() * 9) + 1;
  state = {
    selectedNumbers: [],
    numOfStars: Game.randomNumber(),
    correct: null,
    usedNumbers: [],
    numOfRedraws: 5,
    doneStatus: "Game Over!"
  };

  select = number => {
    if (
      this.state.selectedNumbers.indexOf(number) >= 0 ||
      this.state.usedNumbers.indexOf(number) >= 0
    ) {
      return;
    }
    this.setState(prevState => ({
      correct: null,
      selectedNumbers: prevState.selectedNumbers.concat(number)
    }));
  };

  unselect = number => {
    this.setState(prevState => ({
      correct: null,
      selectedNumbers: prevState.selectedNumbers.filter(
        answer => answer !== number
      )
    }));
  };

  checkAnswer = () => {
    this.setState(prevState => ({
      correct:
        prevState.numOfStars ===
        prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
    }));
    console.log(this.state.correct);
  };

  acceptAnswer = () => {
    this.setState(prevState => ({
      usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      correct: null,
      numOfStars: Game.randomNumber(),
    }));
  };

  redraw = () => {
    if (this.state.numOfRedraws === 0) {
      return;
    }
    this.setState(prevState => ({
      numOfStars: Game.randomNumber(),
      selectedNumbers: [],
      correct: null,
      numOfRedraws: prevState.numOfRedraws - 1
    }));
  };

  render() {
    const {
      selectedNumbers,
      numOfStars,
      correct,
      usedNumbers,
      numOfRedraws
    } = this.state;
    return (
      <div>
        <header className="App-header">Game</header>
        <div className="container">
          <h3>Play Nine</h3>
          <hr />
          <div className="row">
            <Stars numOfStars={numOfStars} />
            <Button
              selectedNumbers={selectedNumbers}
              checkAnswer={this.checkAnswer}
              correct={correct}
              acceptAnswer={this.acceptAnswer}
              redraw={this.redraw}
              numOfRedraws={numOfRedraws}
            />
            <Answer
              selectedNumbers={selectedNumbers}
              unselect={this.unselect}
            />
          </div>
          <br />
          <Numbers
            selectedNumbers={selectedNumbers}
            select={this.select}
            usedNumbers={usedNumbers}
          />
        </div>
      </div>
    );
  }
}

export default Game;
