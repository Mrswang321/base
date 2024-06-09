import React, { FunctionComponent, useEffect, useState } from 'react'
import { 
  View, 
  Text, 
  Image, 
  StyleSheet,
  FlatList,
  RefreshControl,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { inject, observer } from 'mobx-react'
import { List as Store } from '../../store/list'

interface ListProps {
  store?: Store
}

let pageSize = 10

const List: FunctionComponent<ListProps> = (props) => {
  const { store } = props
  const [start, setStart] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const navigation: any = useNavigation()
  const route: any = useRoute()

  useEffect(() => {
    navigation.setOptions({title: route.params.title})
  }, [])

  // type Item = {
  //   "name": string,
  //   "id": string,
  //   "img": string,
  //   "all_click": string,
  //   "favorites": string,
  //   "uri": string,
  //   "is_fine": number,
  //   "has_make_img": number,
  //   "is_exclusive": string,
  //   "burdens": string,
  //   [propsNames: string]: any
  // }

  const _renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.push('Details', {name: item.name})}
        style={styles.item}
      >
        <View style={styles.imgWrap}>
          <Image style={styles.img} source={{uri: item.img}}></Image>
        </View>
        <View style={styles.titleWrap}>
          <Text style={styles.name}>{item.name}</Text>
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={styles.burdens}>{item.burdens}</Text>
          <Text style={styles.title}>{item.all_click}浏览 {item.favorites}收藏</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const _keyExtractor = (item: any, index: number) => {
    return item.id + index
  }

  const _FooterComponent = () => {
    return (
      <SafeAreaView>
        {
          isAnimating && (
            <View style={styles.indicatorWrap}>
              <ActivityIndicator
                style={styles.indicator}
                size="large"
                animating={true}
                color="#ee742f"
              >
              </ActivityIndicator>
              <Text style={{color: '#ee742f'}}>加载中...</Text>
            </View>
          )
        }
      </SafeAreaView>
    )
  }

  const _loadData = () => {
    setIsLoading(true)
    setTimeout(() => {
      // 重新请求接口
      setIsLoading(false)
    }, 1000)
  }

  const _onEndReached = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setStart(start+1)
      setIsAnimating(false)
    }, 1000)
  }

  return (
    <View style={styles.list}>
      <FlatList
        data={store?.list.slice(0, start * pageSize)}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        refreshControl = {
          <RefreshControl
            title="加载中..."
            refreshing={isLoading} 
            onRefresh={_loadData}
            colors={['#ee742f']}
            tintColor={'#ee742f'}
            titleColor="#ee742f"
          />
        }
        ListFooterComponent={_FooterComponent}
        onEndReached={_onEndReached}
        onEndReachedThreshold={0.1}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
    borderStyle: 'solid'
  },
  imgWrap: {
    width: 130
  },
  img: {
    width: 115,
    height: 70
  },
  titleWrap: {
    flex: 1
  },
  name: {
    fontSize: 18,
    height: 28
  },
  burdens: {
    fontSize: 16,
    color: '#666',
    height: 26
  },
  title: {
    fontSize: 14,
    color: '#666',
  },
  indicatorWrap: {
    alignItems: 'center'
  },

  indicator: {
    color: '#f4511e',
    margin: 5
  }
})

export default inject('store')(observer(List))
