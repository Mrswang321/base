import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface TabNavigatorItemProps {
  selected: boolean
  title: string
  renderIcon?: () => React.ReactNode
  renderSelectedIcon?: () => React.ReactNode
  onPress?: () => void
}

const TabNavigatorItem: React.FunctionComponent<TabNavigatorItemProps> = (props) => {
  const { 
    selected, 
    title, 
    renderIcon, 
    renderSelectedIcon,
    onPress
  } = props

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
      <View>
        {
          selected
            ? (renderSelectedIcon && renderSelectedIcon())
            : (renderIcon && renderIcon())
        }
      </View>
      <View
        style={styles.titleWrap}
      >
        <Text style={selected ? styles.titleActive : styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  titleWrap: {
    marginTop: 3
  },
  
  title: {
    fontSize: 12,
    color: "#999"
  },
  
  titleActive: {
    fontSize: 12
  }
})

export default TabNavigatorItem
