import React, { Component } from 'react'
// import store from './index'
import { connect } from 'react-redux'
import { loadDataAsync } from './footer/actionCreator'

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add() {
      dispatch({
        type: 'add'
      })
    },
    change() {
      dispatch(loadDataAsync())
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.props.change()
  //   }, 2000)
  // }

  render() {
    return (
      <div>
        {/* {store.getState().count} */}
        {/* <button onClick={() => store.dispatch({type: 'add'})}>+</button> */}
        {/* {this.props.count}
        <button onClick={this.props.add}>+</button> */}
        {this.props.state.footer.footerText} <br/>
        {this.props.state.header.headerText}
        <button onClick={this.props.change}>+</button>
      </div>
    );
  }
}

// connect 函数的返回结果是个高阶组件
export default App