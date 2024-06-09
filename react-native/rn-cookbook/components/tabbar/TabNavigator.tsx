import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'

interface TabNavigatorProps {
  tabBarStyle?: Object
}

const TabNavigator: React.FunctionComponent<TabNavigatorProps> = (props) => {
  return (
    <View
      style={styles.container}
    >
      <ScrollView
        style={styles.main}
        scrollEnabled={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {
          React.Children.map(props.children, (child: any) => {
            return (
              child && child.props.selected && child.props.children
            )
          })
        }
      </ScrollView>
      <SafeAreaView
        style={props.tabBarStyle}
      >
        <View
          style={styles.tabbar}
        >
          {props.children}
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  main: {
    flex: 1
  },

  tabbar: {
    height: 50,
    borderTopWidth: 1,
    borderTopColor: '#dedede',
    borderStyle: 'solid',
    flexDirection: 'row'
  }
})

export default TabNavigator
