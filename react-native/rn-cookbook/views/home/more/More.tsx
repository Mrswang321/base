// https://react-native-async-storage.github.io/async-storage/docs/install/

import React, { useEffect, useState } from 'react'
import { View, Text, Switch, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { observer, inject } from 'mobx-react'
import { ShowMap } from '../../../store/showMap'
import { Camera } from 'expo-camera'
import { useCamera } from './useCamera'
import { useMap } from './useMap'

interface MoreProps {
  showMap?: ShowMap
}

const More: React.FunctionComponent<MoreProps> = (props) => {
  const { showMap } = useMap(props)

  const {
    take,
    setTake,
    imgBase64,
    setImgBase64,
    cameraRef,
    hasPermission,
    setHasPermission,
    type,
    setType
  } = useCamera()
  
  return (
    <View style={styles.moreWrap}>
      <View style={styles.map}>
        <Text>显示地图：</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={showMap?.isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => showMap?.toggleSwitch()}
          value={showMap?.isEnabled}
        />
      </View>

      <View style={{flex: 1}}>
        <View style={styles.cameraWrap}>
          <Text>获取图片：</Text>
          <TouchableOpacity
            style={styles.takePhoto}
            onPress={() => setTake(true)}
          >
            <Text>开始拍照</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sceneArea}>
          {
            take ? (
              <Camera ref={cameraRef} style={styles.camera} type={type}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      setType(
                        type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back
                      );
                    }}>
                    <Text style={styles.text}> 翻转 </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={async () => {
                      let photo = await cameraRef.current.takePictureAsync()
                      setImgBase64(photo.uri)
                      setTake(false)
                    }}>
                    <Text style={styles.text}> 拍照 </Text>
                  </TouchableOpacity>
                </View>
              </Camera>
            ) : (
              <View style={styles.imgArea}>
                <Image style={styles.imgStyle} source={{uri: imgBase64}}></Image>
              </View>
            )
          }
          {
            hasPermission === null && <View />
          }
          {
            hasPermission === false && <Text>No access to camera</Text>
          }
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  moreWrap: {
    padding: 20,
    flex: 1
  },

  map: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50
  },

  cameraWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50
  },

  takePhoto: {
    width: 100,
    height: 30,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },

  sceneArea: {
    flex: 1,
    // backgroundColor: 'beige'
  },

  camera: {
    flex: 1,
  },

  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },

  imgArea: {
    flex: 1
  },

  imgStyle: {
    width: '100%',
    height: 250
  }
})

export default inject('showMap')(observer(More))
