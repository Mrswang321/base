import React, { Component } from 'react';
import withPortal from './withPortal'

class Dialog extends Component {
  render() {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <button>add</button>
      </div>
    );
  }
}

export default withPortal(Dialog)