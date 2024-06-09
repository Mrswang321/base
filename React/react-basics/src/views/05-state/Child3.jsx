import React, { Component } from 'react'

export default class Child3 extends Component {
  state = {
    value: 'hello'
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.handleChange.bind(this)} type="text"/>
      </div>
    )
  }
}
