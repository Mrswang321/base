import React, { useContext, useCallback } from 'react'
import Child from './Child'
import { countContext } from './Provider'

export default function App() {
  let { state, dispatch } = useContext(countContext)

  let minus = useCallback(
    (num) => {
      return () => {
        dispatch({type: 'minus', num})
      }
    },

    [dispatch],
  )

  let add = useCallback(
    (num) => {
      return () => {
        dispatch({type: 'add', num})
      }
    },
    [dispatch],
  )

  return (
    <>
      <h1>Parent</h1>
      <div>
      <button onClick={minus(9)}>-</button>
      {state.count}
      <button onClick={add(9)}>+</button>
      </div>
      <Child></Child>
    </>
  )
}
