import React, { Component } from 'react'

class Movie extends Component {
  render() {
    return (
      <li className="Movie">
        <h2>{this.props.title}</h2>
        <img id="imageFile" src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + this.props.poster_path}  />
        <p id="intro">{this.props.overview}</p>
        <p id="date">{this.props.release_date}</p>
      </li>
    )
  }
}

export default Movie