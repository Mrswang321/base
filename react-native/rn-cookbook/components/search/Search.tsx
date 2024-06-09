import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import searchImg from '../../assets/images/search.png'
import border1px from '../../utils/border'

interface SearchProps {
  
}

const Search: React.FunctionComponent<SearchProps> = (props) => {
  return (
    <View
      style={styles.searchWrap}
    >
      <Image style={styles.img} source={searchImg}></Image>
      <Text style={styles.text}>想吃什么搜这里，如川菜</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...border1px,
    borderStyle: 'solid',
    borderColor: '#ee742f',
    borderRadius: 6,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff'
  },

  img: {
    width: 24,
    height: 24
  },

  text: {
    color: '#666'
  }
})

export default Search
