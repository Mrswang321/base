import React, { Component } from 'react';

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.handleClick = this.handleClick.bind(this)
  // }


  // handleClick() {
  //   console.log(this)
  // }

  // handleClick = (args) => {
  //   return () => {
  //     console.log(args)
  //     console.log(this)
  //   }
  // }

  handleClick = () => {
    return (e) => {
      console.log(e.target.nodeName)
    }
  }

  render() {
    return (
      <div>
        <h1>title</h1>
        <button onClick={this.handleClick()}>click</button>
      </div>
    );
  }
}

export default App;