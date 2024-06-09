import React, { Component } from 'react'

// import Child from './Child'
// import Child2 from './Child2'
import Child3 from './Child3'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'hello',
      obj: {
        x: 0
      },
      color: ''
    }
    // console.log('constructor')
  }

  // componentWillMount() {
  //   console.log('componentWillMount')
  // }

  UNSAFE_componentWillMount() {
    // console.log(this.state.title)
    // this.state.title = 'hello'
    // this.setState({
    //   title: 'world'
    // })
    // console.log('UNSAFE_componentWillMount')
  }

  componentDidMount() {
    // console.log('componentDidMount')
    // console.log(this.state.title)
    this.setState({
      title: 'world',
      obj: {
        x: 0
      },
      color: 'yellowgreen'
    })

    setTimeout(() => {
      this.setState({
        // title: 'abc',
        color: 'red'
      })
    }, 5000);
  }

  componentDidUpdate() {
    // this.setState({
    //   title: 'abc'
    // })
  }

  // UNSAFE_componentWillUpdate() {
  //   console.log('UNSAFE_componentWillUpdate')
  // }

  render() {
    // console.log('render')
    // 只要父组件render调用，子组件render一定调用
    return (
      <div>
        <h1>parent component</h1>
        {/* <Child title={this.state.obj}></Child> */}
        {/* <Child2 color={this.state.color} title={this.state.title}></Child2> */}
        <Child3></Child3>
      </div>
    )
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount')
  }
}

export default App