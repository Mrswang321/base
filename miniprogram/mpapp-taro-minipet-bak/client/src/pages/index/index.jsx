import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image, Map, Navigator } from '@tarojs/components'
import './index.css'

import centerImg from '../../resources/center.png'
import pinImg from '../../resources/pin.png'

import { dbContext } from '../../context/db'

import buyImg from '../../resources/buy.png'
import sellImg from '../../resources/sell.png'

export default class Index extends Component {

  static contextType = dbContext

  state = {
    longitude: '',
    latitude: '',
    markers: []
  }

  loadData() {
    console.log(buyImg)
    // 加载markers
    const that = this
    this.context.minipetCollection.get({
      success: function(res) {
        let markers = res.data.map((data, index) => {
          let { id, latitude, longitude, type } = data
          return {
            id,
            latitude,
            longitude,
            width: 40,
            height: 40,
            iconPath: type === 'buy' ? buyImg : sellImg
          }
        })

        that.setState({
          markers
        })
      },

      fail(err) {
        console.log(err)
      }
    })
  }

  componentDidMount () {
    Taro.getLocation({
      type: 'wgs84',
      success: (res) => {
        let { longitude, latitude } = res
        this.setState({
          longitude,
          latitude
        })
      }
    })

    this.mapCtx = Taro.createMapContext('map')
    this.handleMoveToLocation()

    this.loadData()
  }

  componentDidShow () { }

  componentDidHide () { }

  handleMoveToLocation = () => {
    this.mapCtx.moveToLocation()
  }

  handleSearchButtonTap = () => {
    Taro.navigateTo({
      url: '/pages/search/search'
    })
  }

  render () {
    return (
      <View className="container">
        <View className="map">
          <Map
            id="map"
            longitude={this.state.longitude}
            latitude={this.state.latitude}
            scale="15"
            show-location={true}
            markers={this.state.markers}
            bindmarkertap="handleMarkerTap"
          >
          </Map>
          <Image 
            onClick={this.handleMoveToLocation} 
            className="location-cover-image" 
            src={centerImg}
          ></Image>
          <Image
            src={pinImg}
            className="pin-cover-image"
          ></Image>
        </View>
        <View className="nav">
          <Navigator className="publish" openType="navigateTo" url="/pages/publish/publish">
            发布
          </Navigator>
          <View className="search" onClick={this.handleSearchButtonTap}>
            搜索
          </View>
        </View>
      </View>
    )
  }
}
