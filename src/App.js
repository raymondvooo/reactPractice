import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Counter from "./components/counter/counter";
import Cards from "./components/cards/cards";
import Game from "./components/game/game";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSync, faStar } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faStar, faSync)

const Index = () => <h2>Index</h2>;

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
            <Link to="/game/">Game</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/counter/" component={Counter} />
      <Route path="/cards/" component={Cards} />
      <Route path="/game/" component={Game} />
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
