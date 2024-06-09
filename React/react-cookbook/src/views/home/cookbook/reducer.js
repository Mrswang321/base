import { LOADDATA } from './actionTypes'
import { Map } from 'immutable'

const defaultState = Map({
  list: []
})

const reducer = (state=defaultState, action) => {
  // console.log(action)
  switch(action.type) {
    case LOADDATA:
      // return {
      //   list: action.list
      // }

      return state.set('list', action.list)

    default:
      return state
  }
}

export default reducer