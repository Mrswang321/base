import React, { useState } from 'react'
import { View, Text, SectionList } from 'react-native'

export default function SectionListDemo() {
  const [cities] = useState([
    {
      key: 'A',
      data: [
        '鞍山',
        '安庆'
      ]
    },
    {
      key: 'B',
      data: [
        '北京',
        '北戴河',
        '北平'
      ]
    },
    {
      key: 'C',
      data: [
        '朝阳',
        '曹妃甸',
        '重庆'
      ]
    }
  ])

  const _renderItem = ({ item }) => {
    return (
      <View style={{height: 200, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          {item}
        </Text>
      </View>
    )
  }

  const _renderSectionHeader = ({section}) => {
    return (
      <View style={{height: 30, backgroundColor: '#ccc', justifyContent: 'center'}}>
        <Text>{section.key}</Text>
      </View>
    )
  }

  const _keyExtractor = (item) => {
    return item
  }

  return (
    <View style={{flex: 1}}>
      <SectionList
        sections={cities}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        renderSectionHeader={_renderSectionHeader}
      />
    </View>
  )
}
