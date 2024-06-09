import React, { Component } from 'react'
import Taro from '@tarojs/taro'

import './app.scss'
import 'taro-ui/dist/style/index.scss' // 引入组件样式 - 方式一

class App extends Component {

  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init({
        env: 'minipet-2gn3qb9080e80522'
      })
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
