import React, { Component } from 'react'
import hoc from './hoc'

class App extends Component {
  render() {
    return (
      <div>
        {this.props.title}<br></br>
        {this.props.msg}
      </div>
    );
  }

  componentDidMount() {
    // console.log(this)
  }
}

const NewApp = hoc(App)

export default NewApp