import React from 'react'
import { observer, inject } from 'mobx-react'
import Search from './Search'

function Home(props) {
  return (
    <>
      <div>{props.counter.count}</div>
      <button onClick={() => props.counter.add()}>add</button>

      <Search></Search>
    </>
  )
}

export default inject('counter')(observer(Home))
