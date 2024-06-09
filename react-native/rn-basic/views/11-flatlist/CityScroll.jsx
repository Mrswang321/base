import React, {
  useState
} from 'react'

import { 
  View, 
  Text,
  FlatList,
  StyleSheet,
  RefreshControl,
  ActivityIndicator,
  SafeAreaView
} from 'react-native'

export default function CityScroll() {
  const [cityList, setCityList] = useState(['北京', '上海', '深圳', '杭州'])
  const [isLoading, setIsLoading] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const _renderItem = (data) => {    
    return (
      <View
        style={styles.listItem}
      >
        <Text>
          {data.item}
        </Text>
      </View>
    )
  }

  const _keyExtractor = (item, index) => {
    return item + index
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
              >
              </ActivityIndicator>
              <Text>加载中...</Text>
            </View>
          )
        }
      </SafeAreaView>
    )
  }

  const _loadData = () => {
    setIsLoading(true)
    setTimeout(() => {
      let refreshData = [
        new Date().getTime().toString(),
        ...cityList
      ]
      setCityList(refreshData)
      setIsLoading(false)
    }, 1000)
  }

  const _onEndReached = () => {
    setIsAnimating(true)
    setTimeout(() => {
      let loadMoreData = [
        ...cityList,
        new Date().getTime().toString()
      ]
      setCityList(loadMoreData)
      setIsAnimating(false)
    }, 1000)
  }

  return (
    <View>
      <FlatList
        data={cityList}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        // refreshing={isLoading}
        // onRefresh={() => {}}
        refreshControl = {
          <RefreshControl
            title="加载中..."
            refreshing={isLoading} 
            onRefresh={_loadData}
            colors={['red']}
            tintColor={'#f4511e'}
            titleColor="#f4511e"
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
  listItem: {
    backgroundColor: 'darkseagreen',
    height: 300,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },

  indicatorWrap: {
    alignItems: 'center'
  },

  indicator: {
    color: '#f4511e',
    margin: 5
  }
})