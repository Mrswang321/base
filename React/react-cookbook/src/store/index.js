import { applyMiddleware, createStore } from 'redux'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { Map } from 'immutable'

import reducer from './reducer'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const initializationState = Map({})

const store = createStore(
  reducer,
  initializationState,
  applyMiddleware(sagaMiddleware)
)

sagas.forEach(saga => sagaMiddleware.run(saga))

export default store