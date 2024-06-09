import React, { useEffect, useState, useCallback } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import { Menu } from '../../../store/menu'
import { inject, observer } from 'mobx-react'

type Value = {
  img: string,
  title: string
}

interface HotCateProps {
  menu?: Menu
}

const HotCate: React.FunctionComponent<HotCateProps> = (props) => {
  // const [list, setList] = useState([])
  let { menu } = props
  const navigation: any = useNavigation()
  
  useEffect(() => {
    // axios.get('http://192.168.31.217:9000/hotcat')
    //   .then(result => {
    //     setList(result.data)
    //   })
    menu?.loadData()
  }, [])

  const handlePress = useCallback(
    (title: string) => {
      return () => {
        navigation.push('List', { title })
      }
    },
    []
  )
  
  return (
    <View
      style={styles.hotcateWrap}
    >
      <View style={styles.title}>
        <Text>热门分类</Text>
      </View>
      <View style={styles.list}>
        {
          menu?.hotcate.map((value: Value) => {
            return (
              <TouchableOpacity
                style={styles.item}
                key={value.title}
                onPress={handlePress(value.title)}
              >
                <Image style={styles.image} source={{uri: value.img}}></Image>
                <Text style={styles.itemText}>{value.title}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  hotcateWrap: {
    backgroundColor: '#fff',
  },

  title: {
    height: 44,
    justifyContent: 'center',
    paddingLeft: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
    borderStyle: 'solid'
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 6
  },

  list: {
    padding: 10,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },

  item: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  itemText: {
    marginTop: 6,
    marginBottom: 12
  }
})

export default inject('menu')(observer(HotCate))
