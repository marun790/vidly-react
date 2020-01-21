import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieServices';

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  render() {
    return (
      <div>
        {this.state.movies.map(movie => (
          <li key={movie._id}>{movie.title}</li>
        ))}
      </div>
    );
  }
}

export default Movies;
