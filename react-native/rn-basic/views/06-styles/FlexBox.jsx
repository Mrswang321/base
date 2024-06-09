import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default function FlexBox() {
  return (
    <View style={styles.container}>
      <View style={styles.section1}><Text>hello</Text></View>
      <View style={styles.section2}><Text>world</Text></View>
      <View style={styles.section3}><Text>!!!!!</Text></View>
    </View>
  )
}


