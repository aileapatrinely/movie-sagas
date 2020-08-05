import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Details extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_DETAILS',
      payload: this.props.store.match.params.id,
    });
  }
  render() {
    const movieItem = this.props.store.currentMovie.map((item, index) => {
      return (
        <div>
          <h4>{item.title}:</h4>
          <img src={item.poster} />
          <h5>{item.description}</h5>
        </div>
      );
    });
    return (
      <div>
        <h1> Movie Details: </h1>

        <p>{movieItem}</p>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default withRouter(connect(mapStoreToProps)(Details));
