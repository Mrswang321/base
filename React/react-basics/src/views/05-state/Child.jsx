import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    // this.props.title = 100
    return (
      <div>
        {this.props.title}
      </div>
    )
  }

  componentDidMount() {
    this.props.onTitle('abcd')
  }
}
