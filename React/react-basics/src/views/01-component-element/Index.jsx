import React from 'react'

import Fun from './Fun'
import Child from './Child'

export default class MyComponent extends React.Component {
  render() {
    return (
      <>
        <h1>Index Component</h1>
        <Fun title="hello">
          <Child></Child>
        </Fun>
      </>
    )
  }
}