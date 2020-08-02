import React, { Component } from 'react';
import './App.css';
import MoviesList from '../MoviesList/MoviesList';
import { HashRouter as Router, Route } from 'react-router-dom';
class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <p>Watch Some Movies!</p>
          <Route exact path="/" component={MoviesList} />
        </div>
      </Router>
    );
  }
}

export default App;
