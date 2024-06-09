import React, { Component } from 'react';

class Child2 extends Component {
  state = {
    content: 'abcd',
    color: 'red',
    propsColor: ''
  }

  handleClick = () => {
    this.setState({
      content: 'fghi',
      color: 'blue'
    })
    // this.forceUpdate()
  }

  // shouldComponentUpdate() {
  //   return false
  // }

  static getDerivedStateFromProps(nextProps, preState) {
    // console.log(nextProps.color, preState.propsColor)
    if (nextProps.color === preState.propsColor) {
      return null
    } else {
      return {
        color: nextProps.color,
        propsColor: nextProps.color
      }
    }
  }
  
  render() {
    // console.log('render')
    return (
      <div style={{color: this.state.color}}>
        hello {this.state.content}
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

export default Child2