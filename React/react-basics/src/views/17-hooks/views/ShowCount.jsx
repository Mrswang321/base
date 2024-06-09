import React, { Component } from 'react';

class ShowCount extends Component {
  handleShowClick = () => {
    // this.setState((state) => {
    //   return {
    //     show: !state.show
    //   }
    // })
    this.props.onShow(!this.props.show)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleShowClick}>show</button>
      </div>
    );
  }
}

export default ShowCount;