import React, { Component } from 'react'
import { View, ScrollView } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'

import './search.css'

export default class search extends Component {
  state = {
    value: '',
    list: []
  }

  onChange = (e) => {
    console.log(e)
  }

  onActionClick = () => {
    
  }

  render() {
    return (
      <View className="search">
        <View className="search-bar">
          <View className="search-input">
            {/* <AtSearchBar
              showActionButton
              value={this.state.value}
              onChange={this.onChange}
              onActionClick={this.onActionClick}
            /> */}
          </View>
          <View className="search-btn" bindtap="handleSearchTap">搜索</View>
        </View>
        <ScrollView scroll-y className="result">
          {
            this.state.list.map((item) => {
              return (
                <View className="result-item" key={item._id}>
                  <View className="address">{item.address}</View>
                  <View className="message">{item.message}</View>
                </View>
              )
            })
          }
        </ScrollView>
      </View>
    )
  }
}
