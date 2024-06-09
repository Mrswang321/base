import React from 'react'
import { 
  View, 
  Text, 
  TouchableHighlight, 
  TouchableOpacity, 
  TouchableWithoutFeedback, 
  TouchableNativeFeedback
} from 'react-native'

export default function Feedback() {
  return (
    <View
      style={{
        margin: 60
      }}
    >
      <TouchableHighlight
        onPress={() => {console.log(0)}}
        style={{borderRadius: 6}}
        activeOpacity={0.85}
        underlayColor="#fff"
      >
        <View
          style={{
            height: 50,
            backgroundColor: 'blueviolet',
            color: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6
          }}
        >
          <Text style={{color: '#fff', fontSize: 20}}>进入详情页</Text>
        </View>
      </TouchableHighlight>
    
      <TouchableOpacity
        onPress={() => {console.log(0)}}
        activeOpacity={0.8}
      >
        <View
          style={{
            height: 50,
            backgroundColor: 'coral',
            color: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6,
            marginTop: 30
          }}
        >
          <Text style={{color: '#fff', fontSize: 20}}>进入首页</Text>
        </View>
      </TouchableOpacity>

      <TouchableWithoutFeedback
        onPress={() => {console.log(0)}}
      >
        <View
          style={{
            height: 50,
            backgroundColor: 'darkblue',
            color: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6,
            marginTop: 30
          }}
        >
          <Text style={{color: '#fff', fontSize: 20}}>返回</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableNativeFeedback
        onPress={() => {console.log(0)}}
      >
        <View
          style={{
            height: 50,
            backgroundColor: 'darkgreen',
            color: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6,
            marginTop: 30
          }}
        >
          <Text style={{color: '#fff', fontSize: 20}}>测试涟漪效果</Text>
        </View>
      </TouchableNativeFeedback>
      
    </View>
  )
}
