import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

@withRouter
class List extends Component {
  render() {
    // console.log(this.props)
    return (
      <div>
        list content
      </div>
    );
  }
}

export default List;