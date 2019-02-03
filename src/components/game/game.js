import React, { Component } from "react";
import Stars from "./stars";
import Answer from "./answer";
import Button from "./button";
import Numbers from "./numbers";
import DoneFrame from "./doneFrame";

var possibleCombinationSum = function(arr, n) {
  if (arr.indexOf(n) >= 0) {
    return true;
  }
  if (arr[0] > n) {
    return false;
  }
  if (arr[arr.length - 1] > n) {
    arr.pop();
    return possibleCombinationSum(arr, n);
  }
  var listSize = arr.length,
    combinationsCount = 1 << listSize;
  for (var i = 1; i < combinationsCount; i++) {
    var combinationSum = 0;
    for (var j = 0; j < listSize; j++) {
      if (i & (1 << j)) {
        combinationSum += arr[j];
      }
    }
    if (n === combinationSum) {
      return true;
    }
  }
  return false;
};

export class Game extends Component {
  static randomNumber = () => Math.floor(Math.random() * 9) + 1;
  static initialState = () => ({
    selectedNumbers: [],
    numOfStars: Game.randomNumber(),
    correct: null,
    usedNumbers: [],
    numOfRedraws: 5,
    doneStatus: null
  });
  state = Game.initialState();

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
    }), this.updateDone);
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
    }), this.updateDone);
  };

  possibleSolutions = ({ numOfStars, usedNumbers }) => {
    const possibleNumbers = new Array(9);
    for (let i = 0; i < possibleNumbers.length; i++) {
      if (usedNumbers.indexOf(i+1) === -1) {
      possibleNumbers[i] = i + 1;
      }
    }
    console.log("used", usedNumbers.indexOf(2))
 
    console.log("HEYMAN", possibleNumbers, usedNumbers)
    return possibleCombinationSum(possibleNumbers, numOfStars);
  };

  updateDone = () => {
    this.setState(prevState => {
      this.possibleSolutions(prevState);
      if (prevState.usedNumbers.length === 9) {
        return {
          doneStatus: "You Win!"
        };
      }
      if (prevState.numOfRedraws === 0 && !this.possibleSolutions(prevState)) {
        return {
          doneStatus: "Game Over!"
        };
      }
    });
  };

  reset = () => {
    this.setState(Game.initialState())
  }

  render() {
    const {
      selectedNumbers,
      numOfStars,
      correct,
      usedNumbers,
      numOfRedraws,
      doneStatus
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
          {doneStatus ? (
            <DoneFrame doneStatus={doneStatus} reset={this.reset}/>
          ) : (
            <Numbers
              selectedNumbers={selectedNumbers}
              select={this.select}
              usedNumbers={usedNumbers}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Game;
