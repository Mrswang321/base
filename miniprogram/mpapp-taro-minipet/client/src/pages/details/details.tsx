import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import { getCurrentInstance } from '@tarojs/taro'
import { dbContext } from '../../context/db'
import './details.scss'

interface Props {
  
}

interface State {
  address: string
  type: string
  contact: string
  message: string
}

export default class details extends Component<Props, State> {
  static contextType = dbContext

  state: State = {
    address: '',
    type: '',
    contact: '',
    message: ''
  }

  componentDidMount() {
    const id: any = getCurrentInstance().router?.params.id
    const that = this
    this.context.minipetCollection
      .where({
        id: parseInt(id)
      })
      .get({
        success: function(res) {
          let { address, contact, type, message } = res.data[0]
          // console.log(res.data)
          that.setState({
            address, 
            type,
            contact,
            message
          })
        }
      })
  }

  render() {
    return (
      <View className="container">
        <View className="item">
          <View className="label">{this.state.address}</View>
        </View>
        <View className="item">
          <View className="label">
            {
              this.state.type !== '' && (
                <Image className="image" src={`/resources/${this.state.type}.png`}></Image>
              )
            }
            
            <View>{this.state.type === 'buy' ? '求购' : '转让'}</View>
          </View>
        </View>
        <View className="item">
          <View className="label">{this.state.message}</View>
        </View>
        <View className="item">
          <View className="label">{this.state.contact}</View>
        </View>
      </View>
    )
  }
}
