import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'

export default function FlatListDemo() {
  const [data, setData] = useState([
    { key: 'key1', name: 'name1' },
    { key: 'key2', name: 'name1' },
    { key: 'key3', name: 'name1' },
    { key: 'key4', name: 'name1' },
    { key: 'key5', name: 'name1' },
    { key: 'key6', name: 'name1' },
    { key: 'key7', name: 'name1' },
    { key: 'key8', name: 'name1' },
    { key: 'key9', name: 'name1' },
    { key: 'key10', name: 'name1' },
    { key: 'key11', name: 'name1' },
    { key: 'key12', name: 'name1' },
  ])

  const _renderItem = ({item}) => {
    return (
      <View style={{width: '100%', height: 100, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          {item.name}
        </Text>
      </View>
    )
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={_renderItem}
      ></FlatList>
    </View>
  )
}
