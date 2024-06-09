import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Child extends Component {
  static propTypes = {
    render: PropTypes.func
  }
  render() {
    // const { render: RenderFun } = this.props
    return (
      <div>
        {/* <RenderFun></RenderFun> */}
        {/* {this.props.render} */}
        {this.props.render(['a', 'b'])}
      </div>
    );
  }
}

export default Child;