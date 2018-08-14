import React, { Component } from 'react'
import Movie from './Movie'
import MovieInfo from './1989.json'

// let months = {
//     "01": "January",
//     "02": "February",
//     "03": "March",
//     "04": "April",
//     "05": "May",
//     "06": "June",
//     "07": "July",
//     "08": "August",
//     "09": "September",
//     "10": "October",
//     "11": "November",
//     "12": "December"
// }

// movie.release_date = []
// let array = release_date.split('-')
// let month = months.get(array[1].value)


class MovieList extends Component {
  render() {
    return (
      <section className="MovieList">
        <ul>
          {MovieInfo.results.map((movie, i) => {
            return <Movie title={movie.title} poster_path={movie.poster_path} overview={movie.overview} release_date={movie.release_date} key={i} />
          })}
        </ul>
      </section>
    )
  }
}

export default MovieList