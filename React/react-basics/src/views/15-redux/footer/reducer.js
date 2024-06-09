import { CHANGETEXT } from './actionTypes'
const defaultState = { footerText: 'footer' }
const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case CHANGETEXT:
      // setTimeout(() => {
        return {
          footerText: action.payload
        }
      // }, 1000)
      // break
    
    default:
      return state
  }
}

export default reducer