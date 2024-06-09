import { createContext } from 'react'
import Taro from '@tarojs/taro'

const db = Taro.cloud.database()
const minipetCollection = db.collection('minipet')

const dbContext = createContext({
  minipetCollection
})

export {
  dbContext
}

