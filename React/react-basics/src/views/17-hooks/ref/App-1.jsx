import React, { useState, useCallback } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  const minus = useCallback(
    () => {
      setTimeout(() => {
        setCount(count-1)
      }, 2000)
    },
    [count]
  )
  const add = useCallback(
    () => {
      setTimeout(() => {
        setCount(count+1)
      }, 2000)
    },
    [count]
  )

  return (
    <div>
      <button onClick={minus}>-</button>
      {count}
      <button onClick={add}>+</button>
    </div>
  )
}
