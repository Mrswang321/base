import React, { useRef, useEffect } from 'react'
import { View, Text, Animated } from 'react-native'

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true
      }
    ).start()
  }, [fadeAnim])

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim
      }}
    >
      {props.children}
    </Animated.View>
  )
}

export default function Animation() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <FadeInView
        style={{
          width: 200,
          height: 30,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{color: '#fff'}}>Fadein</Text>
      </FadeInView>
    </View>
  )
}
