import React, { useState, useCallback } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'
import 'animate.css'

export default function App() {
  const [show, setShow] = useState(true)

  const handleClick = useCallback(() => {
    setShow(!show)
  }, [show])

  return (
    <>
      <CSSTransition
        in={show}
        timeout={1000}
        onEnter={() => {console.log(0)}}
        mountOnEnter
        unmountOnExit
        classNames={{
          enter: 'animate__animated',
          enterActive: 'animate__bounce',
          exit: 'animate__animated',
          exitActive: 'animate__wobble'
        }}
        appear
      >
        <div>
          hello
        </div>
      </CSSTransition>
      <div>
        <button onClick={handleClick}>click</button>
      </div>
    </>
  )
}
