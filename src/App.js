import React, { Component } from 'react'
import MovieList from './MovieList'

class App extends Component {
  render() {
    const title = 'Top Movies from 1989!!!'
    return (
      <div className="App">
        <header>
          <h1>{title}</h1>
          <section><MovieList /></section>
        </header>
      </div>
    )
  }
}

export default App