import React, { Component } from 'react';
import Dialog from './Dialog'

class App extends Component {
  state = {
    count: 0,
    open: false
  }

  handleClick = () => {
    this.setState(state => ({count: state.count + 1}))
  }

  openModal = () => {
    this.setState({
      open: true
    })
  }

  render() {
    return (
      <>
        <div onClick={this.handleClick}>
          按钮被点击了 {this.state.count} 次
          {
            this.state.open && <Dialog></Dialog>
          }
        </div>
        <div>
          <button onClick={this.openModal}>打开</button>
        </div>
      </>
    )
  }
}

export default App;