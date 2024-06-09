import React, { useEffect, useState } from 'react'
import { View, Image, Text } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import axios from 'axios'

interface DetailsProps {
  
}

const Details: React.FunctionComponent<DetailsProps> = (props) => {
  const route: any = useRoute()
  const nav: any = useNavigation()
  const [detail, setDetail] = useState<any | null>(null)

  useEffect(() => {
    nav.setOptions({
      title: route.params.name
    })

    ;(async function(){
      let result = await axios.get('http://192.168.31.217:9000/detail')
      setDetail(result.data.data)
    })()
  }, [])

  return (
    <>
      {
        detail && (
          <View>
            <View style={styles.imgWrap}>
              <Image style={styles.titleImg} source={{uri: detail.img}}></Image>
            </View>
            <View style={styles.titleWrap}>
              <Text style={styles.title}>{detail.name}</Text>
              <Text style={styles.subTitle}>{detail.all_click}浏览 {detail.favorites}收藏</Text>
              <View style={styles.favorites}>
                <Text style={styles.favTitle}>收藏</Text>
              </View>
            </View>
          </View>
        )
      }
    </>
  )
}

const styles = {
  imgWrap: {

  },
  titleImg: {
    height: 250
  },
  titleWrap: {
    height: 170,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20
  },
  subTitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 10
  },
  favorites: {
    width: 130,
    height: 40,
    backgroundColor: '#ee742f',
    marginTop: 20,
    borderRadius: 6
  },
  favTitle: {
    color: '#fff',
    lineHeight: 40,
    textAlign: 'center'
  }
}

export default Details
