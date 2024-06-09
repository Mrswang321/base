import React, { Component } from 'react';
import ShowCount from './views/ShowCount'

class App extends Component {
  state = {
    count: 0,
    show: true
  }

  handleClick = () => {
    this.setState((state) => {
      return {
        count: state.count+1
      }
    }, () => {
      document.title = this.state.count
    })
  }

  handleShow = (show) => {
    this.setState({show})
  }

  render() {
    return (
      <div>
        {this.state.show && <div>{this.state.count}</div>}
        <button onClick={this.handleClick}>add</button>
        <ShowCount show={this.state.show} onShow={this.handleShow}></ShowCount>
      </div>
    )
  }

  componentDidMount() {
    document.title = this.state.count
  }
}

export default App;