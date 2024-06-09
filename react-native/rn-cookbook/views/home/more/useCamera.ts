import { useState, useRef, useEffect } from 'react'

import { Camera } from 'expo-camera'

function useCamera() {
  const [take, setTake] = useState(false)
  const [imgBase64, setImgBase64] = useState('http://placehold.it/375x250')
  const cameraRef = useRef<any>(null)

  const [hasPermission, setHasPermission] = useState(false)
  const [type, setType] = useState(Camera.Constants.Type.back)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync()
      setHasPermission(status === 'granted');
    })();
  }, [])

  return {
    take,
    setTake,
    imgBase64,
    setImgBase64,
    cameraRef,
    hasPermission,
    setHasPermission,
    type,
    setType
  }
}

export {
  useCamera
}