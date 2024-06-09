import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

export default function LoadData() {

  const [list, setList] = useState([])

  useEffect(() => {
    fetch('https://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=C265B0800A1411EB9D14AFFCEB030AE4C16BA35ABD8C4380BB7BA4D8785C2D19&optimus_risk_level=71&optimus_code=10')
      .then(response => response.json())
      .then(result => {
        console.log(result)
      })
  }, []) 

  return (
    <View>
      <Text>hello</Text>
    </View>
  )
}
