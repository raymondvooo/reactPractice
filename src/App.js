import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Counter } from "./components/counter";
import { Cards } from "./components/cards";

const Index = () => <h2>Index</h2>;
// const Counter = () => <h2>Counter</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/counter/">Counter</Link>
          </li>
          <li>
            <Link to="/cards/">Cards</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/counter/" component={Counter} />
      <Route path="/cards/" component={Cards} />
      <Route path="/users/" component={Users} />
    </div>
  </Router>
);

class App extends Component {
  render() {
    return (
      <div>
        <AppRouter />
      </div>
    );
  }
}

export default App;
