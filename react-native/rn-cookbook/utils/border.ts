import { PixelRatio } from 'react-native'

function getStyle(dpr: number) {
  switch(dpr) {
    case 2:
      return {
        borderWidth: 0.5
      }
    case 3: 
      return {
        borderWidth: 0.333333
      }
    default:
      return {
        borderWidth: 1
      }
  }
}

const border1px = {
  ...getStyle(PixelRatio.get())
}

export default border1px