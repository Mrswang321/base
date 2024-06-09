import { put, takeLatest } from 'redux-saga/effects'
import { changeShowMap } from './actionCreator'

function* foo(action) {
  // 可能有异步操作
  yield put(changeShowMap(action.isShowMap))
}

function* change() {
  yield takeLatest('change', foo)
}

export default change