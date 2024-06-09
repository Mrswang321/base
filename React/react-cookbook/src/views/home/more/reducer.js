import { CHANGE } from './actionTypes'
import { Map } from 'immutable'

const defaultState = Map({
  isShowMap: JSON.parse(localStorage.getItem('isShowMap') || true)
})

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case CHANGE:
      localStorage.setItem('isShowMap', action.isShowMap)
      // return {
      //   isShowMap: action.isShowMap
      // }
      return state.set('isShowMap', action.isShowMap)
    default:
      return state
  }
}

export default reducer