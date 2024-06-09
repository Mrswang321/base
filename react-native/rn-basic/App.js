// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import Home from './views/09-router/Home'
// import Detail from './views/09-router/Detail'
// import MyWebView from './views/10-webview/MyWebView'
// import CityScroll from './views/11-flatlist/CityScroll'

// import { StatusBar } from 'expo-status-bar'

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <StatusBar 
//         style="light"
//         hidden={true}
//       />
//       <Stack.Navigator 
//         initialRouteName="CityScroll"
//         screenOptions={{
//           title: '首页',
//           headerStyle: {
//             backgroundColor: '#f4511e',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//         }}
//       >
//         <Stack.Screen 
//           name="Home" 
//           component={Home}
//           options={{ title: '首页' }}
//         />
//         <Stack.Screen
//           name="Detail" 
//           component={Detail}
//           options={{ title: '详情' }}
//         />
//         <Stack.Screen
//           name="MyWebView" 
//           component={MyWebView}
//           options={{ title: 'webview' }}
//         />
//         <Stack.Screen
//           name="CityScroll" 
//           component={CityScroll}
//           options={{ title: 'flatlist' }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

import './views/mobx/store'