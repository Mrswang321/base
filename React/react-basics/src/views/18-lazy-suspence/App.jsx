import React, { Component, lazy, Suspense } from 'react'

const Child = lazy(() => import('./Child'))

function Loading() {
  return (
    <div>loading...</div>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={Loading()}>
          <Child></Child>
        </Suspense>
      </div>
    );
  }
}

export default App;