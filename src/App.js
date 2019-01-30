import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class Button extends React.Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue);
  }
  render() { 
  return(
		<button onClick={this.handleClick}>
    +{this.props.incrementValue}
    </button>
    );	
	 }
  }
  
  class Reset extends React.Component {
    reset = () => {
    this.props.onClickFunction();
      console.log("heyman");
    }
    render() {
    return(
    <button onClick={this.reset}>
    Reset
    </button>);
    }
  }
  
  const Result = (props) => {
    return (
      <div>{props.counter}</div>);
  }
  

class App extends Component {
  state = {
    counter: 0
  };
  
  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
    counter: prevState.counter + incrementValue
   }));
  }
  
  resetClick = () => {
    this.setState(() => ({
    counter: 0
   }));
  }
  
    render() {
      return (
        <div>
        <Button incrementValue={1} onClickFunction = {this.incrementCounter} />
        <Button incrementValue={2} onClickFunction = {this.incrementCounter} />
        <Button incrementValue={3} onClickFunction = {this.incrementCounter} />
        <Button incrementValue={4} onClickFunction = {this.incrementCounter} />
        <Reset  onClickFunction = {this.resetClick}/>
        <Result counter = {this.state.counter}/>
        </div>
        );
  }
}

export default App;
