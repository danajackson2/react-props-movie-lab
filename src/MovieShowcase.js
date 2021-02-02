import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return (
      movieData.map(mov => {
        return <MovieCard title={mov.title} IMDBRating={mov.IMDBRating} poster={mov.poster} genres={mov.genres}/>
      })
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
