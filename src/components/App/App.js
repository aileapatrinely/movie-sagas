import React, { Component } from 'react';
import './App.css';
import MoviesList from '../MoviesList/MoviesList';
import { HashRouter as Router, Route } from 'react-router-dom';
import Details from '../Details/Details';
class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <p>Watch Some Movies!</p>
          <Route exact path="/" component={MoviesList} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/edit" component={Edit} />
        </div>
      </Router>
    );
  }
}

export default App;
