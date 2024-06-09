import React from 'react'
import { View, Text, Platform, StyleSheet } from 'react-native'

import ComponentIOS from './ComponentIOS'
import ComponentAndroid from './ComponentAndroid'

export default function PlatformModule() {
  const Component = Platform.select({
    ios: () => ComponentIOS,
    android: () => ComponentAndroid
  })()

  if (Platform.Version >= 25) {
    console.log('Android', Platform.Version)
  }

  const majorVersionIOS = parseInt(Platform.Version, 10)

  if (majorVersionIOS >= 9) {
    console.log('iOS', majorVersionIOS)
  }

  return (
    <>
      <View
        style={styles.box}
      >
        <Text>hello</Text>
      </View>
      <View
        style={styles.container}
      >
        <Text>world</Text>
      </View>
      <Component></Component>
    </>
  )
}

const styles = StyleSheet.create({
  box: {
    margin: 50,
    height: Platform.OS === 'ios' ? 200 : 100,
    width: 100,
    backgroundColor: 'red'
  },

  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'yellow'
      },
      android: {
        backgroundColor: 'green'
      },
      default: {
        backgroundColor: 'blue'
      }
    })
  }
})

