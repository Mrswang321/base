import React, { Component } from 'react';
import Child3 from './Child3'
class Child2 extends Component {
  render() {
    return (
      <div>
        <Child3></Child3>
      </div>
    );
  }
}

export default Child2;