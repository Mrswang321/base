import React, { Component } from 'react'
import { DivWraper, OtherDivWraper } from './StyledComponent'

export default class App extends Component {
  render() {
    return (
      <>
        <DivWraper color="red">
          hello
        </DivWraper>
        <OtherDivWraper color="red">
          world
        </OtherDivWraper>
      </>
    )
  }
}