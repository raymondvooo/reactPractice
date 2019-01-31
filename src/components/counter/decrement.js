import React, { Component } from "react";

export default class Decrement extends Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.decrementValue);
  };
  render() {
    return (
      <button onClick={this.handleClick}>-{this.props.decrementValue}</button>
    );
  }
}
