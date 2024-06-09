import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

function useMap(props) {
  let { showMap } = props

  const navigation = useNavigation()

  useEffect(() => {
    showMap?.setEnable()
    navigation.setOptions({
      headerShown: true,
      title: '更多'
    })
  }, [])

  return {
    showMap
  }
}

export {
  useMap
}