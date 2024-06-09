import React from 'react'
import { View, Text } from 'react-native'
import { WebView } from 'react-native-webview'

export default function MyWebView() {
  return (
    <View
      style={{flex: 1}}
    >
      <WebView 
        source={{ uri: 'https://www.baidu.com/' }}
        style={{
          flex: 1,
          width: '100%'
        }}
      />
      <View
        style={{flex: 1}}
      >
        <Text>hello</Text>
      </View>
    </View>
  )
}
