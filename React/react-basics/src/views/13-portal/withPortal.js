import React from 'react'
import { createPortal } from 'react-dom'

const withPortal = (ComponentWrapper) => {
  return class extends React.Component {
    render() {
      return (
        createPortal(
          <ComponentWrapper></ComponentWrapper>,
          document.querySelector('body')
        )
      )
    }
  }
}

export default withPortal