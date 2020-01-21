import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieServices';

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  deleteMovie(movie) {
    console.log('Delete', movie);
    let movies = this.state.movies.filter(mov => mov._id !== movie._id);
    this.setState({ movies });
  }

  render() {
    var { length: count } = this.state.movies;
    if (count === 0) return <p>There are no movies</p>;
    return (
      <React.Fragment>
        <p>There are {count} from database</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genere.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.deleteMovie(movie)}
                    type="button"
                    className="btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
