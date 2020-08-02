import React, { Component } from 'react';
import { connect } from 'react-redux';

class MoviesList extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MOVIES',
    });
  }

  render() {
    const moviesListArray = this.props.store.movies.map((item, index) => {
      return (
        <div>
          <img src={item.poster} />
          <h4>{item.title}</h4>
        </div>
      );
    });

    return <div>{moviesListArray}</div>;
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(MoviesList);
