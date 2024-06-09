import React, { Component } from 'react';
import Child from './Child'

// import RenderFun from './RenderFun'
// import RenderClass from './RenderClass'
import renderFunction from './renderFunction'

class App extends Component {
  render() {
    return (
      <div>
        <Child
          render={renderFunction}
        ></Child>
      </div>
    );
  }
}

export default App;