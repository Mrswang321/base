import React, { Component, createRef } from 'react';

class Child3 extends Component {
  constructor(props) {
    super(props)
    this.divRef = createRef()
  }

  state = {
    divStyle: {
      width: '100px', 
      height: '100px', 
      backgroundColor: 'red'
    }
  }

  componentDidMount() {
    this.setState({
      divStyle: {
        width: '200px',
        height: '200px',
        backgroundColor: 'red'
      }
    })
  }

  render() {
    return (
      <div ref={this.divRef} style={this.state.divStyle}>
        
      </div>
    );
  }

  getSnapshotBeforeUpdate() {
    let divWidth = this.divRef.current.getBoundingClientRect().width
    return divWidth
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot)
  }
}

export default Child3;