import { takeLatest, put, call } from 'redux-saga/effects'
import axios from 'axios'

function* loadDataAsync(action) {
  // let result = yield axios({
  //   url: action.url
  // })
  let result = yield call(axios.get, action.url)

  yield put({
    type: 'loadData',
    list: result.data.icons
  })
}

function* loadData () {
  yield takeLatest('loadDataSaga', loadDataAsync)
}

export default loadData