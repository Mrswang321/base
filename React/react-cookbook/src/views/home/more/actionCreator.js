import { CHANGE } from './actionTypes'

const changeShowMap = isShowMap => {
  return {
    type: CHANGE,
    isShowMap
  }
}

const changeSaga = (isShowMap) => {
  return {
    type: 'change',
    isShowMap
  }
}

export {
  changeShowMap,
  changeSaga
}