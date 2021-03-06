import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MoviesList extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MOVIES',
    });
  }

  goToDetails = (id) => (event) => {
    this.props.history.push(`/details/${id}`);
  };

  render() {
    const moviesListArray = this.props.store.movies.map((item, index) => {
      return (
        <div>
          <img
            key={index}
            onClick={this.goToDetails(item.id)}
            src={item.poster}
          />
          <h4>{item.title}</h4>
        </div>
      );
    });

    return <div>{moviesListArray}</div>;
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(MoviesList);
