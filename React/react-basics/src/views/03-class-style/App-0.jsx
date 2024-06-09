import React, { Component } from 'react'
import classStyle from './style.css'
import classNames from 'classnames'

const styles = {
  fontSize: '100px'
}

const cx = classNames.bind(classStyle)

export default class App extends Component {
  state = {
    f: 'font',
    b: true
  }

  render() {
    let classNames = cx({
      font: this.state.b
    })

    return (
      <>
        <div style={styles}>
          hello
        </div>
        <div className={classNames}>world</div>
      </>
    )
  }
}
