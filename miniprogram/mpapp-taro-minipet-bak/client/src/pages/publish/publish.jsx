import React, { Component } from 'react'
import { RadioGroup, View, Label, Radio, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './publish.css'
import { dbContext } from '../../context/db'
import _ from 'underscore'
import Feedback from '../../components/feedback/feedback'

export default class Publish extends Component {
  static contextType = dbContext

  state = {
    isSubmit: false,
    isComplete: false,
    isSucc: false,
    
    address: '点击选择，请勾选哦~',
    type: 'buy',
    message: '',
    contact: ''
  }

  handleChooseLocation = () => {
    Taro.chooseLocation({
      success: (res) => {
        this.setState({
          address: res.address
        })
        this.longitude = res.longitude
        this.latitude = res.latitude
      }
    })
  }

  radioChange = (e) => {
    this.setState({
      type: e.detail.value
    })
  }

  validMessage(title) {
    Taro.showToast({
      title,
      icon: 'loading',
      duration: 1500
    })
  }

  handleMessage = (e) => {
    this.setState({
      message: e.detail.value
    })
  }

  handleContact = (e) => {
    this.setState({
      contact: e.detail.value
    })
  }

  handleSubmit = () => {
    if (this.state.address === '点击选择，请勾选哦~') {
      this.validMessage('请选择地址')
      return  
    }

    if (this.state.message === '') {
      this.validMessage('请输入说明')
      return
    }

    if (this.state.contact === '') {
      this.validMessage('请输入联系方式')
      return
    }

    const data = {
      address: this.state.address,
      latitude: this.latitude,
      longitude: this.longitude,
      type: this.state.type,
      contact: this.state.contact,
      message: this.state.message,
      id: _.random(1, 10000000000) + new Date().getTime()
    }

    this.setState({
      isSubmit: true
    })

    // 添加数据到云端数据库
    try {
      this.context.minipetCollection.add({
        data,
        success: (res) => {
          this.setState({
            isSucc: true
          })
        },
        fail: (err) => {
          console.log(err)
          this.setState({
            isSucc: false
          })
        },
        complete: () => {
          this.setState({
            isComplete: true
          })
        }
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <>
        {
          !this.state.isSubmit && (
            <View className="container">
              <View className="item">
                <View className="label">我的地址</View>
                <View className="content" onClick={this.handleChooseLocation}>
                  {this.state.address}
                </View>
              </View>
              <View className="item">
                <View className="label">类型</View>
                <View className="content">
                  <RadioGroup onChange={this.radioChange}>
                    <Label>
                      <View>
                        <Radio value="buy" checked="true"/>
                      </View>
                      <View>求购</View>
                    </Label>
                    <Label>
                      <View>
                        <Radio value="sell"/>
                      </View>
                      <View>转让</View>
                    </Label>
                  </RadioGroup>
                </View>
              </View>
              <View className="item">
                <View className="label">说明</View>
                <View className="content">
                  <Input value={this.state.message} onInput={this.handleMessage} placeholder="请输入说明" />
                </View>
              </View>
              <View className="item">
                <View className="label">联系方式</View>
                <View className="content">
                  <Input value={this.state.contact} onInput={this.handleContact} placeholder="请输入联系方式" />
                </View>
              </View>
              <View className="button" onClick={this.handleSubmit}>
                发布信息
              </View>
            </View>
           )
        }
        
        {
          (this.state.isSubmit && this.state.isComplete) && (
            <Feedback isSucc={this.state.isSucc} className="feedback"></Feedback>
          )
        }
      </>
    )
  }
}
