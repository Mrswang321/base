import React, { useState, useCallback } from 'react'
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Search from '../../../../components/search/Search'
import { Menu } from '../../../../store/menu'
import { inject, observer } from 'mobx-react'
import { useNavigation } from '@react-navigation/native'

interface MaterialViewProps {
  menu?: Menu
}

const MaterialView: React.FunctionComponent<MaterialViewProps> = (props) => {
  const { menu } = props
  const nav = useNavigation()
  const [currentTab, setCurrentTab] = useState('肉类')
  const handleTabPress = useCallback (
    (tab) => {
      return () => {
        setCurrentTab(tab)
      }
    },
    []
  )
  const handleTabContentPress = useCallback (
    (title) => {
      return () => {
        nav.navigate('List', {title})
      }
    },
    []
  )
  
  return (
    <View style={styles.container}>
      <View style={styles.searchWrap}>
        <Search></Search>
      </View>
      <View style={styles.menuWrap}>
        <View style={styles.menuTab}>
          <ScrollView>
            {
              menu?.material 
              && (Object.keys(menu?.material).map((value, index) => {
                return (
                  <TouchableOpacity 
                    key={index} 
                    style={[
                      styles.menuTabItem,
                      currentTab === value ? styles.menuTabItemActive : null
                    ]}
                    onPress={handleTabPress(value)}
                  >
                    <Text>{value}</Text>
                  </TouchableOpacity>
                )
              }))
            }
          </ScrollView>
        </View>
        <View style={styles.menuContent}>
          <ScrollView 
            style={styles.menuContentScroll}
          >
            <View style={styles.items}>
              {
                menu?.material[currentTab].map(value => {
                  return (
                    <TouchableOpacity 
                      key={value}
                      style={styles.menuContentItem}
                      onPress={handleTabContentPress(value)}
                    >
                      <Text>{value}</Text>
                    </TouchableOpacity>
                  )
                })
              }
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  searchWrap: {
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },

  menuWrap: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'red'
  },

  menuTab: {
    width: 100
  },

  menuTabItem: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },

  menuTabItemActive: {
    backgroundColor: '#fff'
  },

  menuContent: {
    flex: 1,
    backgroundColor: '#fff',
  },

  menuContentItem: {
    width: '33.333333%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuContentScroll: {
    // flexDirection: 'row'
    // flex: 1s
    height: 0
  },

  items: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

export default inject('menu')(observer(MaterialView))
