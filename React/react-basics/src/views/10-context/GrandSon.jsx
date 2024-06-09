import React from 'react'
import { MyConsumer } from './my-context'

const GrandSon = function (props) {
  return (
    <MyConsumer>
      {
        (value) => {
          return (
            <div>{value.color}</div>
          )
        }
      }
    </MyConsumer>
  )
}

// GrandSon.contextType = myContext

export default GrandSon
