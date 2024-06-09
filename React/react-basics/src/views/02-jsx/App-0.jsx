import React, { Component } from 'react'

import Child from './Child'
import Child2 from './Child2'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [
        <Child key="1" />,
        <Child2 key="2"></Child2>,
        <div key="3">hello</div>
      ]
    }
  }

  add() {
    return (
      <div>hello</div>
    )
  }

  render() {
    return (
      <div>
        {
          // this.state.list.map((value) => {
          //   return value
          // })
          // false ? <Child></Child> : <Child2></Child2>
          false && <Child></Child>
        }
      </div>
    )
  }
}
