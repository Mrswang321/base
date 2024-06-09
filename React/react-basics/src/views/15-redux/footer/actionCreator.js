import { CHANGETEXT } from './actionTypes'

export const loadDataSync = (data) => {
  return {
    type: CHANGETEXT,
    text: data,
    payload: 'hello'
  }
}

export const loadDataAsync = (url) => {
  return function(dispatch) {
    setTimeout(() => {
      dispatch(loadDataSync('footer text'))
    }, 2000)
  }
}