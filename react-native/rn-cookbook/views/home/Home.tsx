import React, { useState, useCallback } from 'react'
import { Image, StyleSheet } from 'react-native'
import TabNavigator from '../../components/tabbar/TabNavigator'
import TabNavigatorItem from '../../components/tabbar/TabNavigatorItem'
import Cookbook from './cookbook/Cookbook'
import Category from './category/Category'
import Map from './map/Map'
import More from './more/More'

import cookbook from '../../assets/images/cookbook.png'
import cookbookActive from '../../assets/images/cookbook-active.png'
import menu from '../../assets/images/menu.png'
import menuActive from '../../assets/images/menu-active.png'
import location from '../../assets/images/location.png'
import locationActive from '../../assets/images/location-active.png'
import more from '../../assets/images/more.png'
import moreActive from '../../assets/images/more-active.png'
import { ShowMap } from '../../store/showMap'
import { inject, observer } from 'mobx-react'

interface HomeProps {
  showMap?: ShowMap
}

const Home: React.FunctionComponent<HomeProps> = (props) => {
  const [selectedTab, setSelectedTab] = useState('home')
  const changeSelectTab = useCallback(
    (home: string) => {
      return () => setSelectedTab(home)
    },
    [],
  )
  const { showMap } = props
  
  return (
    <TabNavigator
      tabBarStyle={styles.tabBarStyle}
    >
      <TabNavigatorItem
        selected={selectedTab === 'home'}
        title="美食大全"
        renderIcon={() => <Image style={styles.imageStyle} source={cookbook} />}
        renderSelectedIcon={() => <Image style={styles.imageStyle} source={cookbookActive} />}
        onPress={changeSelectTab('home')}
      >
        <Cookbook />
      </TabNavigatorItem>
      <TabNavigatorItem
        selected={selectedTab === 'category'}
        title="分类"
        renderIcon={() => <Image style={styles.imageStyle} source={menu} />}
        renderSelectedIcon={() => <Image style={styles.imageStyle} source={menuActive} />}
        onPress={changeSelectTab('category')}
      >
        <Category />
      </TabNavigatorItem>
      {
        showMap?.isEnabled && (
          <TabNavigatorItem
            selected={selectedTab === 'map'}
            title="地图"
            renderIcon={() => <Image style={styles.imageStyle} source={location} />}
            renderSelectedIcon={() => <Image style={styles.imageStyle} source={locationActive} />}
            onPress={changeSelectTab('map')}
          >
            <Map />
          </TabNavigatorItem>
        )
      }
      <TabNavigatorItem
        selected={selectedTab === 'more'}
        title="更多"
        renderIcon={() => <Image style={styles.imageStyle} source={more} />}
        renderSelectedIcon={() => <Image style={styles.imageStyle} source={moreActive} />}
        onPress={changeSelectTab('more')}
      >
        <More />
      </TabNavigatorItem>
    </TabNavigator>
  )
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: 'snow'
  },
  imageStyle: {
    width: 22,
    height: 22
  }
})

export default inject('showMap')(observer(Home))