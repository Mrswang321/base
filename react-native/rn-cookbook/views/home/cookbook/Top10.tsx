import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import { List, store } from '../../../store/list'
import { observer, inject } from 'mobx-react'
import { useNavigation } from '@react-navigation/native'

interface Top10Props {
  store?: List
}

const Top10: React.FunctionComponent<Top10Props> = (props) => {
  const nav: any = useNavigation()
  
  return (
    <View>
      <View style={styles.title}>
        <Text>精品好菜</Text>
      </View>
      <View style={styles.list}>
        {
          store.top10Data.map(v => (
            <TouchableOpacity
              onPress={() => nav.push('Details', {name: v.name})}
              key={v.id}
              style={styles.item}
            >
              <View>
                <View style={styles.imageWrap}>
                  <Image style={styles.image} source={{uri: v.img}}></Image>
                </View>
                <View style={styles.titleWrap}>
                  <Text style={styles.listtitle}>{v.name}</Text>
                  <Text style={styles.subtitle}>{v.all_click}浏览 {v.favorites}收藏</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    height: 44,
    justifyContent: 'center',
    paddingLeft: 10
  },

  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 10
  },

  item: {
    width: '50%',
    paddingRight: 10
  },

  imageWrap: {
    height: 0,
    paddingBottom: '66.6666667%'
  },

  image: {
    width: '100%',
    height: Dimensions.get("window").width * 0.5 * 0.666667
  },

  titleWrap: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  listtitle: {
    fontSize: 16
  },

  subtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 6
  }
})

export default inject('store')(observer(Top10))
