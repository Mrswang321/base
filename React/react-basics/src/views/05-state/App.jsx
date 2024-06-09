import React, { Component } from 'react'
import Child from './Child'
import Child2 from './Child2'
import Child3 from './Child3'
import Child4 from './Child4'

export default class App extends Component {
  state = {
    count: 0,
    title: {
      aaa: {
        bbb: 'header',
        ccc: 'footer'
      }
    },
    list: ['a', 'b'],
    msg: ''
  }

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     y: 100,
  //     count: 200
  //   }
  // }

  handleClick() {
    // console.log(this)

    // this.setState({
    //   count: 1,
    //   title: {
    //     aaa: {
    //       bbb: 'head',
    //       ddd: 'body'
    //     }
    //   },
    //   blog: 'string'
    // })

    // this.setState({
    //   count: this.state.count + 1
    // })

    // this.setState(state => ({
    //   count: state.count + 1
    // }))

    // this.setState({
    //   count: 100
    // }, () => {
    //   console.log(this.state.count)
    // })

    // this.state.list.push('c')

    // this.setState({})

  }

  handleTitle(msg) {
    this.setState({
      msg
    })
  }

  render() {
    return (
      <>
        <div>
          {this.state.count}
          {/* {JSON.stringify(this.state)} */}
        </div>
        <div>
          {
            this.state.list.map(value => <div key={value}>{value}</div>)
          }
        </div>
        <button
          onClick={this.handleClick.bind(this)}
        >
          click
        </button>
        <Child onTitle={this.handleTitle.bind(this)}></Child>
        <Child2 msg={this.state.msg}></Child2>

        <Child3></Child3>

        <Child4></Child4>
      </>
    )
  }
}
