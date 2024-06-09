import { takeLatest, put } from 'redux-saga/effects'

function* loadDataSaga(action) {
  yield put({
    type: 'loadData',
    list: ['a', 'b', 'c']
  })
}

function* loadData() {
  yield takeLatest('loadDataSaga2', loadDataSaga)
}

export default loadData