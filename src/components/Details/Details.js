import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
  render() {
    const movieItem = this.props.store.movies.map((item, index) => {
      return (
        <div>
          <h4>{item.title}:</h4>
          <h5>{item.description}</h5>
          <h5>{item.genres}</h5>
        </div>
      );
    });
    return (
      <div>
        <h1>Movie Details:</h1>
        <p>{movieItem}</p>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Details);
