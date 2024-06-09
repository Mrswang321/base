import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0
  }

  add = () => {
    setTimeout(() => {
      this.setState((state) => {
        return {
          count: state.count + 1
        }
      })
    }, 2000)
  }
  minus = () => {
    setTimeout(() => {
      this.setState((state) => {
        return {
          count: state.count - 1
        }
      })
    }, 2000)
  }

  render() {
    return (
      <div>
        <button onClick={this.minus}>-</button>
        {this.state.count}
        <button onClick={this.add}>+</button>
      </div>
    );
  }
}

export default App;