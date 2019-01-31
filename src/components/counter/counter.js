import React, { Component } from "react";
import Decrement from "./decrement";
import Increment from "./increment";
import Reset from "./reset";
import Result from "./result";

export class Counter extends Component {
  state = {
    counter: 0
  };

  incrementCounter = incrementValue => {
    this.setState(prevState => ({
      counter: prevState.counter + incrementValue
    }));
  };

  decrementCounter = decrementValue => {
    this.setState(prevState => ({
      counter: prevState.counter - decrementValue
    }));
  };

  resetClick = () => {
    this.setState(() => ({
      counter: 0
    }));
  };

  render() {
    return (
      <div className="Counter">
        <header className="App-header">Counter</header>
        <Increment incrementValue={1} onClickFunction={this.incrementCounter} />
        <Increment incrementValue={5} onClickFunction={this.incrementCounter} />
        <Increment
          incrementValue={20}
          onClickFunction={this.incrementCounter}
        />
        <Increment
          incrementValue={100}
          onClickFunction={this.incrementCounter}
        />
        <br />
        <Decrement decrementValue={1} onClickFunction={this.decrementCounter} />
        <Decrement decrementValue={5} onClickFunction={this.decrementCounter} />
        <Decrement
          decrementValue={20}
          onClickFunction={this.decrementCounter}
        />
        <Decrement
          decrementValue={100}
          onClickFunction={this.decrementCounter}
        />
        <br />
        <Reset onClickFunction={this.resetClick} />
        <Result counter={this.state.counter} />
      </div>
    );
  }
}

export default Counter;
