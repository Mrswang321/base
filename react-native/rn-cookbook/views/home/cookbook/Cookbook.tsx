import React, { useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Swiper from './Swiper'
import Search from '../../../components/search/Search'
import HotCate from './HotCate'
import Top10 from './Top10'
import { useNavigation } from '@react-navigation/native'

interface CookbookProps {
  
}

const Cookbook: React.FunctionComponent<CookbookProps> = (props) => {
  const navigation = useNavigation()
  
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: '美食大全'
    })
  }, [])
  
  return (
    <View style={styles.container}>
      <ScrollView 
        style={{height: 0}}
      >
        <View style={styles.swiperWrap}>
          <Swiper></Swiper>
        </View>
        <View style={styles.searchWrap}>
          <Search></Search>
        </View>
        <View>
          <HotCate></HotCate>
        </View>
        <View>
          <Top10></Top10>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  swiperWrap: {
    height: 250
  },

  searchWrap: {
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
})

export default Cookbook
