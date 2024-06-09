import React, { Component } from 'react'

class Child extends Component {
  // static defaultProps = {
  //   title: {
  //     x: 0
  //   }
  // }
  render() {
    return (
      <div>
        {this.props.title.x}
        {this.props.children}
      </div>
    )
  }
}

Child.defaultProps = {
  title: {
    x: 0
  }
}

export default Child
