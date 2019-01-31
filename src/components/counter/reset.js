import React, { Component } from "react";

export default class Reset extends Component {
  reset = () => {
    this.props.onClickFunction();
    console.log("heyman");
  };
  render() {
    return <button onClick={this.reset}>Reset</button>;
  }
}
