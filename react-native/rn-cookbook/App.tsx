import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './views/home/Home'
import List from './views/list/List'
import Details from './views/details/Details'
import { StatusBar } from 'expo-status-bar'
import { Provider } from 'mobx-react'
import { store } from './store/list'
import { showMap } from './store/showMap'
import { menu } from './store/menu'

const Stack = createStackNavigator()
function App() {
  return (
    <Provider store={store} showMap={showMap} menu={menu}>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator
          initialRouteName="Home"
          
          screenOptions={{
            headerStyle: {
              backgroundColor: '#ee742f',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={Home}
            options={{
              title: '美食大全',
              headerShown: false
            }}
          />
          <Stack.Screen 
            name="List"
            component={List}
            options={{
              title: ''
            }}
          />
          <Stack.Screen 
            name="Details" 
            component={Details}
            options={{
              title: '美食详情'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App