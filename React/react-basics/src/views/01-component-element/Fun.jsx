import React from 'react'
export default class Fun extends React.Component {
  render() {
    // 其他的操作
    return (
      <>
        <div>fun</div>
        {this.props.title}
        {this.props.children}
      </>
    )
  }
}