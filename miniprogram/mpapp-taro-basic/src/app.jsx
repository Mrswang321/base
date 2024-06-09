import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import { getCurrentInstance } from '@tarojs/taro'

import counterStore from './store/counter'

import './app.scss'

const store = {
  counterStore
}

// class App extends Component {
//   componentDidMount () {}

//   componentDidShow () {
//     console.log(100)
//     console.log(getCurrentInstance().router)
//   }

//   componentDidHide () {}

//   componentDidCatchError () {}

//   // onLaunch(options) {
//   //   console.log(0)
//   //   console.log(options)
//   // }

//   // this.props.children 就是要渲染的页面
//   render () {
//     return (
//       <Provider store={store}>
//         {this.props.children}
//       </Provider>
//     )
//   }
// }

function App(props) {
  const x = 100

  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}

export default App
