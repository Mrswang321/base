import React from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Intheater = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Intheater</Text>
      <Button 
        onPress={() => navigation.push('Comingsoon')}
        title="goto comingsoon"
      ></Button>
    </View>
  )
}
const Comingsoon = () => {
  return (
    <View>
      <Text>Comingsoon</Text>
    </View>
  )
}

export default function Home() {

  const navigation = useNavigation()

  const handleClick = () => {
    // console.log(navigation)
    navigation.push('Detail', {
      id: 100
    })
  }

  return (
    <View style={{flex: 1}}>
      <Text>home 2</Text>
      <TouchableOpacity
        onPress={handleClick}
        activeOpacity={0.8}
      >
        <View
          style={{
            margin: 20,
            height: 40,
            backgroundColor: 'darkblue',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={{color: 'white', fontSize: 18}}>进入详细页</Text>
        </View>
      </TouchableOpacity>

      <Stack.Navigator initialRouteName="Intheater">
        <Stack.Screen
          name="Intheater"
          component={Intheater}
        ></Stack.Screen>
        <Stack.Screen
          name="Comingsoon" 
          component={Comingsoon}
        ></Stack.Screen>
      </Stack.Navigator>
    </View>
  )
}
