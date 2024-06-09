import React, { useState } from 'react'
import {TabBar} from 'antd-mobile'
import { useSelector } from 'react-redux'

import { CookBook } from './cookbook'
import { Category } from './category'
import { Map } from './map'
import { More } from './more'

import cookbook from '@/assets/images/cookbook.png'
import cookbookActive from '@/assets/images/cookbook-active.png'
import menu from '@/assets/images/menu.png'
import menuActive from '@/assets/images/menu-active.png'
import location from '@/assets/images/location.png'
import locationActive from '@/assets/images/location-active.png'
import more from '@/assets/images/more.png'
import moreActive from '@/assets/images/more-active.png'

function Home(props) {
  const [selectedTab, setSelectedTab] = useState('category')
  const [hidden] = useState(false)
  const [fullScreen] = useState(true)

  const isShowMap = useSelector(state => state.getIn(['more', 'isShowMap']))

  const itemsArray = [
    <TabBar.Item
      title="美食大全"
      key="cookbook"
      icon={<div style={{
        width: '22px',
        height: '22px',
        background: `url(${cookbook}) center center /  30px 30px no-repeat` }}
      />
      }
      selectedIcon={<div style={{
        width: '22px',
        height: '22px',
        background: `url(${cookbookActive}) center center /  30px 30px no-repeat` }}
      />
      }
      selected={selectedTab === 'cookbook'}
      onPress={() => {
        setSelectedTab('cookbook');
      }}
    >
      <CookBook></CookBook>
    </TabBar.Item>,
    <TabBar.Item
      icon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${menu}) center center /  21px 21px no-repeat` }}
        />
      }
      selectedIcon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${menuActive}) center center /  21px 21px no-repeat` }}
        />
      }
      title="分类"
      key="category"
      selected={selectedTab === 'category'}
      onPress={() => {
        setSelectedTab('category');
      }}
    >
      <Category></Category>
    </TabBar.Item>,
    <TabBar.Item
      icon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${location}) center center / 21px 21px no-repeat` }}
        />
      }
      selectedIcon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${locationActive}) center center / 21px 21px no-repeat` }}
        />
      }
      title="地图"
      key="map"
      selected={selectedTab === 'map'}
      onPress={() => {
        setSelectedTab('map');
      }}
    >
      <Map></Map>
    </TabBar.Item>,
    <TabBar.Item
      icon={{ uri: more }}
      selectedIcon={{ uri: moreActive }}
      title="更多"
      key="more"
      selected={selectedTab === 'more'}
      onPress={() => {
        setSelectedTab('more');
      }}
    >
      <More></More>
    </TabBar.Item>
  ] 

  // 删除第三个元素（Map页签）
  if (!isShowMap) {
    itemsArray.splice(2, 1)
  }

  return (
    <div style={fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#000"
        barTintColor="white"
        hidden={hidden}
      >
        {
          itemsArray
        }
      </TabBar>
    </div>
  );
}

export default Home