import React from 'react'

const hoc = (Comp) => {
  return class extends React.Component {
    render() {
      return (
        <Comp {...this.props} msg="message"></Comp>
      )
    }
  }
}

export default hoc