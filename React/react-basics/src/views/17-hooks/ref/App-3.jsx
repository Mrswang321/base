import React, { useState, useRef, useCallback } from 'react'

export default function App() {
  const countRef = useRef(0)
  const [count, setCount] = useState(0)

  const minus = useCallback(
    () => {
      setTimeout(() => {
        countRef.current--
        setCount(countRef.current)
      }, 2000)
    },
    [countRef]
  )

  const add = useCallback(
    () => {
      setTimeout(() => {
        countRef.current++
        setCount(countRef.current)
      }, 2000)
    },
    [countRef]
  )

  return (
    <div>
      <button onClick={minus}>-</button>
      {count}
      <button onClick={add}>+</button>
    </div>
  )
}