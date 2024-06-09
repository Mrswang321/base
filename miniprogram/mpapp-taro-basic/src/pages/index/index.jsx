import React, { Component, useEffect } from 'react'
import { View, Button, Text, Map } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import Taro, { navigateTo } from '@tarojs/taro'

import './index.scss'

import Detail from '../detail/Detail'

import CompH5 from '../../components/CompH5'
import CompWeapp from '../../components/CompWeapp'

import Title from './StyledView'

import List from '../list/List'


// @inject('store')
// @observer
// class Index extends Component {

//   // componentDidShow() {
//   //   console.log(0)
//   // }

//   onTitleClick () {
//     console.log(1000)
//   }
 


//   render () {
//     const { counterStore: { counter } } = this.props.store
//     return (
//       <View className='index'>
//         <Button onClick={this.increment}>+</Button>
//         <Button onClick={this.decrement}>-</Button>
//         <Button onClick={this.incrementAsync}>Add Async !!</Button>
//         <Text>{counter}</Text>
//         <Button onClick={this.handleGotoDetail}>goto detail</Button>
//         <Detail></Detail>
//       </View>
//     )
//   }
// }

function Index(props) {
  const { counterStore: { counter } } = props.store

  const increment = () => {
    const { counterStore } = props.store
    counterStore.increment()
  }

  const decrement = () => {
    const { counterStore } = props.store
    counterStore.decrement()
  }

  const incrementAsync = () => {
    const { counterStore } = props.store
    counterStore.incrementAsync()
  }

  const handleGotoDetail = () => {
    navigateTo({
      url: '/pages/detail/Detail?id=100'
    })
  }

  useEffect(() => {
    const app = Taro.getApp()
    console.log(app)
  }, [])

  return (
    
    <>
      {/* <List></List> */}
      <view id='map'>hello</view>
      <comp></comp>
    </>
  )
}

export default inject('store')(observer(Index))
