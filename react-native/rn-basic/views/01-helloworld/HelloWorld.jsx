import React from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput
} from 'react-native'
import styles from './styles'

const HelloWorld = (props) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.contentView}>
        <Text style={styles.contentText}>Some Text 3</Text>
      </View>
      <Image
        source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
        style={styles.contentImage}
      ></Image>
      <TextInput
        style={styles.textInput}
        placeholder="请输入内容"
      ></TextInput>
    </ScrollView>
  )
}

export default HelloWorld