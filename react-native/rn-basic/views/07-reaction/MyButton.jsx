import React, { useCallback } from 'react'
import { View, Text, Button } from 'react-native'

export default function MyButton() {
  const handleClick = useCallback(() => {
    console.log(0)
    
  }, [])

  return (
    <View style={{margin: 50, backgroundColor: 'red'}}>
      <Button
        onPress={handleClick}
        title="click"
        color="#f9efd4"
      ></Button>
    </View>
  )
}
