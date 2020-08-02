import React, { Component } from 'react';
import './App.css';
import MoviesList from '../MoviesList/MoviesList';
import { HashRouter as Router, Route } from 'react-router-dom';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Watch Some Movies!</h1>
          <Route exact path="/" component={MoviesList} />
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/edit/:id" component={Edit} />
        </div>
      </Router>
    );
  }
}

export default App;
