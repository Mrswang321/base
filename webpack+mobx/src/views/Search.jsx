import React from 'react'
import { observer, inject } from 'mobx-react'

function Search(props) {
  // console.log(props.counter.count)
  return (
    <div>
      {props.counter.count}
    </div>
  )
}

export default inject('counter')(observer(Search))