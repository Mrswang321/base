import React, { useState, useCallback } from 'react'
import { View, Text, TextInput } from 'react-native'

export default function HandingTextInput() {
  const [text, setText] = useState('')

  const handleChange = useCallback((text) => {
    // console.log(text)
    setText(text)
  })

  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{
          height: 40, 
          marginTop: 50, 
          borderWidth: 1, 
          borderColor: '#ccc',
          padding: 5,
        }}
        placeholder="请输入需要翻译的单词"
        onChangeText={handleChange}
        keyboardType="web-search"
      ></TextInput>
      <Text style={{padding: 10, fontSize: 50}}>
        {
          text.split(' ').map(word => word && '🍕').join(' ')
        }
      </Text>
    </View>
  )
}
