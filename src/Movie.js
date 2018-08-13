import React, { Component } from 'react'

class Movie extends Component {
  render() {
    return (
      <li className="Movie">
        <h2>{this.props.title}</h2>
        <img src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + this.props.poster_path} />
        <p>{this.props.overview}</p>
      </li>
    )
  }
}

export default Movie