import React, { Component } from 'react'
// import Child from './Child'
// import Child2 from './Child2'
import Child3 from './Child3'
// import AAA from './myClass'

// let aaa = new AAA()

export default class App extends Component {
  state = {
    symbol: Symbol('a')
  }

  foo() {
    console.log(0)
  }

  render() {
    return (
      <div>
        {/* <Child>
          <Child2></Child2>
        </Child>
        <Child2></Child2> */}
        <Child3 title={30}></Child3>
      </div>
    )
  }
}
