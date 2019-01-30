import React, { Component } from "react";

class Button extends Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue);
  };
  render() {
    return (
      <button onClick={this.handleClick}>+{this.props.incrementValue}</button>
    );
  }
}

class Decrement extends Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.decrementValue);
  };
  render() {
    return (
      <button onClick={this.handleClick}>-{this.props.decrementValue}</button>
    );
  }
}

class Reset extends Component {
  reset = () => {
    this.props.onClickFunction();
    console.log("heyman");
  };
  render() {
    return <button onClick={this.reset}>Reset</button>;
  }
}

const Result = props => {
  return <div>{props.counter}</div>;
};

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
        <Button incrementValue={1} onClickFunction={this.incrementCounter} />
        <Button incrementValue={5} onClickFunction={this.incrementCounter} />
        <Button incrementValue={20} onClickFunction={this.incrementCounter} />
        <Button incrementValue={100} onClickFunction={this.incrementCounter} />
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
