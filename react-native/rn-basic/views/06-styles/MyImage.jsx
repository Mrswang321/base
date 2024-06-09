import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import cityimg from '../../assets/city.jpg'
export default function MyImage() {
  return (
    <View
      style={{
        margin: 50
      }}
    >
      <Text>hello</Text>
      <Image
        source={{
          uri: 'https://facebook.github.io/react/logo-og.png',
          width: 100,
          height: 100,
          cache: 'reload',
        }}
      ></Image>
      <Image
        source={cityimg}
        style={{
          width: 100,
          height: 100
        }}
      ></Image>
      <Image
        source={require('./inner.html')}
        style={{
          width: 200,
          height: 100
        }}
      ></Image>
      <Image
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          width: 100,
          height: 100
        }}
      ></Image>
      <View>
        <View style={{position: 'absolute'}}>
          <Text>hello</Text>
        </View>
        <ImageBackground
          source={cityimg}
          style={{
            width: '100%', 
            height: '100%',
            opacity: 0.1
          }}
        >
        </ImageBackground>
      </View>
    </View>
  )
}
