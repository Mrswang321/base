import React, { useCallback, useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

interface CategoryTitleProps {
  
}

const CategoryTitle: React.FunctionComponent<CategoryTitleProps> = (props: any) => {
  const  { state, descriptors, navigation, position } = props
  const [left, setLeft] = useState(0)

  const routeArray: any[] = []

  useEffect(() => {
    state.routes.map((route, index) => {
      routeArray.push(route.name)
    })
  }, [routeArray])
  
  const handlePress = useCallback(
    (left) => {
      return () => {
        setLeft(left)
        navigation.navigate(left === 0 ? routeArray[0] : routeArray[1])
      }
    },
    []
  )
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrap}>
        <TouchableOpacity 
          style={styles.titleItem}
          onPress={handlePress(0)}
        >
          <Text style={{color: left === 0 ? '#ee742f' : '#fff'}}>分类</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.titleItem}
          onPress={handlePress(70)}
        >
          <Text style={{color: left === 0 ? '#fff' : '#ee742f'}}>食材</Text>
        </TouchableOpacity>
        <View 
          style={[
            styles.titleSlider,
            { left }
          ]}
        ></View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ee742f',
    alignItems: 'center',
    justifyContent: 'center'
  },

  titleWrap: {
    position: 'relative',
    flexDirection: 'row',
    width: 140,
    height: 30,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: '#fff',
    borderRadius: 15,
    marginTop: 7,
    marginBottom: 8
  },

  titleItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleSlider: {
    position: 'absolute',
    width: 70,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
    zIndex: -1
  }
})

export default CategoryTitle
