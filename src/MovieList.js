import React, { Component } from 'react'
import Movie from './Movie'
import MovieInfo from './1989.json'

class MovieList extends Component {
  render() {
    return (
      <section className="MovieList">
        <ul>
          {MovieInfo.results.map((movie, i) => {
            return <Movie title={movie.title} poster_path={movie.poster_path} overview={Movie.overview} key={i} />
          })}
        </ul>
      </section>
    )
  }
}

export default MovieList