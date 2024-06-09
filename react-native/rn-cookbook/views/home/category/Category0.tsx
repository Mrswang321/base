import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CategoryTitle from './CategoryTitle'
import { createStackNavigator } from '@react-navigation/stack'
import CategoryView from './components/CategoryView'
import MaterialView from './components/MaterialView'

const NestedStack = createStackNavigator()

interface CategoryProps {
  
}

const Category: React.FunctionComponent<CategoryProps> = (props) => {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: props => <CategoryTitle {...props} />
    })
  }, [])
  
  return (
    <View style={styles.cateWrap}>
      <NestedStack.Navigator
        initialRouteName="CategoryView"
        headerMode="none"
      >
        <NestedStack.Screen name="CategoryView" component={CategoryView} />
        <NestedStack.Screen name="MaterialView" component={MaterialView} />
      </NestedStack.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  cateWrap: {
    height: Dimensions.get("window").height - 50 - 68 - 44,
  }
})

export default Category
