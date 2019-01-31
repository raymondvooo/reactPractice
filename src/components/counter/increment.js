import React, { Component } from "react";

export default class Increment extends Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue);
  };
  render() {
    return (
      <button onClick={this.handleClick}>+{this.props.incrementValue}</button>
    );
  }
}
