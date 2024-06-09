import React, { useEffect } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import RNSwiper from 'react-native-swiper'
import { observer, inject } from 'mobx-react'
import { List } from '../../../store/list'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

interface SwiperProps {
  store?: List
}

const Swiper: React.FunctionComponent<SwiperProps> = (props) => {
  let { store } = props
  const nav: any = useNavigation()

  useEffect(() => {
    store?.loadData()
  }, [])

  return (
    <RNSwiper 
      showsButtons={false}
      loop={true}
      autoplay={true}
    >
      {
        store?.swiperData.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => nav.push('Details', {name: item.name})}
            >
              <View>
                <Image
                  style={styles.img}
                  source={{uri: item.img}}
                />
            </View>
            </TouchableOpacity>
          )
        })
      }
    </RNSwiper>
  )
}

const styles = StyleSheet.create({
  img: {
    height: 250
  }
})

export default inject('store')(observer(Swiper))
