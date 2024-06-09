import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import Child2 from './Child2'
// import AAA from './myClass'

export default class Child3 extends Component {
  // static defaultProps = {
  //   title: 'hello'
  // }

  static propTypes = {
    title(props, propName, componentName) {
      console.log(props, propName, componentName)
      if (props[propName] <= 100) {
        return new Error('传入的值必须大于100')
      }
    }
  }

  render() {
    let { title } = this.props
    // console.log(title)
    return (
      <div>
        {JSON.stringify(title)}
      </div>
    )
  }
}
