import React, { Component } from 'react';
import Child2 from './Child2'
import GrandSon from './GrandSon'

import { MyProvider } from './my-context'

const value = {
  color: 'green',
  changeColor: (color) => {
    console.log(color)
    value.color = color
  }
}

class Child1 extends Component {
  render() {
    return (
      <MyProvider>
        <Child2></Child2>
        <GrandSon></GrandSon>
      </MyProvider>
      // <div>
      //   <Child2></Child2>
      //   <GrandSon></GrandSon>
      // </div>
    );
  }
}

export default Child1;