import React, { Component } from 'react'
import { View, ScrollView } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import { db, dbContext } from '../../context/db'

import './search.scss'

export default class search extends Component {
  static contextType = dbContext

  state = {
    value: '',
    list: []
  }

  onChange = (value) => {
    this.setState({
      value
    })
  }

  onActionClick = () => {
    const _ = db.command
    const reg = new RegExp(this.state.value, 'gi')
    const that = this
    this.context.minipetCollection.where(_.or(
      [
        {
          message: reg
        },
        {
          contact: reg
        }
      ]
    ))
    .get({
      success: function(res) {
        that.setState({
          list: res.data
        })
      }
    })
  }

  render() {
    return (
      <View>
        <View>
          <View>
            <AtSearchBar
              showActionButton
              value={this.state.value}
              onChange={this.onChange}
              onActionClick={this.onActionClick}
            />
          </View>
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
