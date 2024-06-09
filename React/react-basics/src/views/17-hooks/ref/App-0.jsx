import React, {useRef, useEffect} from 'react'

export default function App() {
  let inputRef = useRef(null)

  useEffect(() => {
    console.log(inputRef.current)
  }, [])

  return (
    <div>
      hello
      <input ref={inputRef} type="text"/>
    </div>
  )
}
