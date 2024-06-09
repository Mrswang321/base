import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function Detail() {
  const navigation = useNavigation()
  const route = useRoute()

  useEffect(() => {
    setTimeout(() => {
      navigation.setOptions({
        title: '小炒牛肉'
      })
    }, 3000)

    console.log(route.params.id)
    
  }, [route, navigation])

  return (
    <View>
      <Text>detail</Text>
    </View>
  )
}
