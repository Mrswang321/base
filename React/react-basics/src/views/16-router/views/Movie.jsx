import React, { Component } from 'react'

// function getQuery(query) {
//   return new URLSearchParams(query)
// }

class Movie extends Component {
  handleClick = () => {
    this.props.history.push('/theater')
  }

  render() {
    return (
      <div>
        movie
        <button onClick={this.handleClick}>goto theater</button>
      </div>
    )
  }

  componentDidMount() {
    // let { location } = this.props
    // console.log(location.state.name)
    // let query = getQuery(location.search)
    // console.log(query.get('id'))
  }
}

export default Movie;