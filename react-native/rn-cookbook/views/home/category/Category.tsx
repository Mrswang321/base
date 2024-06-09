import React, { useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import CategoryView from './components/CategoryView'
import MaterialView from './components/MaterialView'
import CategoryTitle from './CategoryTitle'
import { useNavigation } from '@react-navigation/native'
const Tab = createMaterialTopTabNavigator()

interface CategoryProps {
  
}

const Category: React.FunctionComponent<CategoryProps> = (props) => {
  const navigation = useNavigation()
  
  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  })
  
  return (
    <Tab.Navigator 
      tabBar={props => <CategoryTitle {...props} />}
      style={{flex: 1}}
      sceneContainerStyle={{flex: 1}}
    >
      <Tab.Screen name="CategoryView" component={CategoryView} />
      <Tab.Screen name="MaterialView" component={MaterialView} />
    </Tab.Navigator>
  )
}

export default Category
