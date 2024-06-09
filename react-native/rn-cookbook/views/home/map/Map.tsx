import React, { useEffect } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { WebView } from 'react-native-webview'
import { useNavigation } from '@react-navigation/native'


interface MapProps {
  
}

const Map: React.FunctionComponent<MapProps> = (props) => {
  const navigation = useNavigation()
  
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: '美食地图'
    })
  }, [])
  
  return (
    <View style={styles.mapWrap}>
      <WebView containerStyle={styles.webView} source={{ uri: 'https://map.baidu.com/search/%E4%BA%AC%E5%9F%8E%E4%B8%80%E9%94%85%E7%BE%8A%E8%9D%8E%E5%AD%90%E7%81%AB%E9%94%85(%E6%B2%99%E6%B2%B3%E5%BA%97)/@12946535.175,4860775.68,19z?querytype=s&da_src=shareurl&wd=%E4%BA%AC%E5%9F%8E%E4%B8%80%E9%94%85%E7%BE%8A%E8%9D%8E%E5%AD%90%E7%81%AB%E9%94%85%EF%BC%88%E6%B2%99%E6%B2%B3%E5%BA%97%EF%BC%89&c=131&src=0&wd2=%E5%8C%97%E4%BA%AC%E5%B8%82%E6%98%8C%E5%B9%B3%E5%8C%BA&pn=0&sug=1&l=13&b=(12927320,4834994;12981080,4866066)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&sug_forward=4062f3cba815e9a08a36eeca&device_ratio=2' }} />
    </View>
  )
}

const styles = StyleSheet.create({
  mapWrap: {
    flex: 1
  },

  webView: {
    width: '100%',
    height: Dimensions.get("window").height - 88 * 2
    // height: '100%'
  }
})

export default Map
