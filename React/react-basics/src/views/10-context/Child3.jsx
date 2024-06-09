import React, { Component } from 'react';
import { myContext } from './my-context'

class Child3 extends Component {
  static contextType = myContext

  handleClick = () => {
    this.context.changeColor('green')
  }

  render() {
    return (
      <div>
        {this.context.color}
        <button onClick={this.handleClick}>change color</button>
      </div>
    );
  }

  componentDidMount() {
    // console.log(this.context)
    
    // this.context.changeColor('yellow')
  }
}

export default Child3;