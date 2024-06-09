// import { combineReducers } from 'redux'
import {
  combineReducers
} from 'redux-immutable'

import { reducer as cookbook } from '@/views/home/cookbook'
import { reducer as more } from '@/views/home/more'

const reducer = combineReducers({
  cookbook,
  more
})

export default reducer