import React, { Component } from 'react'
import { View, Icon } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './feedback.scss'

export default class feedback extends Component {
  handleFeedbackButtonTap = () => {
    Taro.navigateBack()
  }

  render() {
    return (
      <View className="feedback-body">
        <View className="icon-box">
          <Icon className="icon-box-img" type={this.props.isSucc ? 'success' : 'cancel'} size="80"></Icon>
          <View className="icon-box-title">数据添加 {this.props.isSucc ? '成功' : '失败'}！</View>
        </View>
        <View 
          className={`feedback-button ${this.props.isSucc ? '' : 'feedback-button-fail'}`}
          onClick={this.handleFeedbackButtonTap}
        >
          {this.props.isSucc ? '返回' : '重新填写'}
        </View>
      </View>
    )
  }
}
