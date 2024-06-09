import React, { PureComponent } from 'react';

class Child extends PureComponent {
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log(nextProps)
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.title.x === this.props.title.x) {
  //     return false
  //   } else {
  //     return true
  //   }
  // }

  render() {
    console.log('child render')
    return (
      <div>
        child {this.props.title.x}
      </div>
    );
  }
}

export default Child;