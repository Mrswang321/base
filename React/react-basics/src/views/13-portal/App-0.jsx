import React, { Component } from 'react';
import { createPortal } from 'react-dom'
import Child from './Child'

class App extends Component {
  render() {
    return (
      <div>
        hello
        {createPortal(<Child></Child>, document.querySelector('body'))}
      </div>
    );
  }
}

export default App;