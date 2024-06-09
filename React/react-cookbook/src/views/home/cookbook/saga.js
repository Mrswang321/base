import { put, takeLatest } from 'redux-saga/effects'
import http from '@/utils/http'

import { loadDataSync } from './actionCreator'
import { LOADDATASAGA } from './actionTypes'

function* loadDataAsync() {
  // let result = yield call(http.get, {
  //   url: '/api/list'
  // })

  let result = yield http.get({
    url: '/api/list'
  })

  // console.log(result)

  yield put(loadDataSync(result.data))
}

function* loadData() {
  yield takeLatest(LOADDATASAGA, loadDataAsync)
}

export default loadData