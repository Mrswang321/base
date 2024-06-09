import React, { Component } from 'react';
import { View, Text } from '@tarojs/components'
import { eventCenter, getCurrentInstance } from '@tarojs/taro'

class Detail extends Component {
  componentDidMount() {
    // let {id} = getCurrentInstance().router
    // console.log(getCurrentInstance().router)
    // console.log(id)


    const onShowEventId = getCurrentInstance().router.onShow
    console.log(getCurrentInstance().router)
    // 监听
    eventCenter.on(onShowEventId, this.onMyShow)
  }

  onMyShow() {
    console.log('hello')
  }

  // componentDidShow() {
  //   console.log(200)
  // }

  render() {
    return (
      <View>
        <View>hello</View>
      </View>
    )
  }
}

export default Detail;