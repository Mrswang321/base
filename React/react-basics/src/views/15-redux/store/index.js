// const { createStore } = require('redux')

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import m1 from './middleware/m1'
import m2 from './middleware/m2'
import reducer from './reducer'

const store = createStore(
  reducer, 
  applyMiddleware(m1, m2, thunk)
)

export default store
