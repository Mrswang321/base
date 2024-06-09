import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { useRouteMatch } from 'react-router-dom'

function withAnimate(Comp) {
  return (props) => {
    const match = useRouteMatch()
    const activeClass = {
      enter: props.type === 'material' ? 'slideInRight' : 'slideInLeft',
      exit: props.type === 'material' ? 'slideOutLeft' : 'slideOutRight'
    }
    
    return (
      <CSSTransition
        in={!!match}
        timeout={1000}
        classNames={{
          enter: 'animate__animated',
          enterActive: `animate__${activeClass.enter}`,
          exit: 'animate__animated',
          exitActive: `animate__${activeClass.exit}`
        }}
        mountOnEnter
        unmountOnExit
      >
        <Comp {...props}></Comp>
      </CSSTransition>
    )
  }
}

export default withAnimate