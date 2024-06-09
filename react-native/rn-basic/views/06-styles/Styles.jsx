import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Styles() {
  return (
    <View style={styles.wrap}>
      <View
        style={styles.box}
        height={100}
        backgroundColor={'green'}
        marginTop={34}
        marginBottom={34}
      >
        <Text>hello</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: 'green'
  },
  box: {
    // margin: 50,
    // width: 100,
    // height: 100,
    backgroundColor: 'red',
    flex: 1,
    width: '100%'
  }
})