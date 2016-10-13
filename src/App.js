import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Redux Example</h2>
        </div>

        <ol>
          <li>
            <Link to="/todo">ToDo</Link>
            <Link to="/counter">Counter</Link>
          </li>
        </ol>
      </div>
    );
  }
}

export default App;
