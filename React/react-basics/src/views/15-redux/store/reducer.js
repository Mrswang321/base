// const defaultState = {
//   count: 0
// }

// const reducer = (state=defaultState, action) => {
//   switch (action.type) {
//     case 'add':
//       return {
//         ...state,
//         count: state.count + 1
//       }
  
//     default:
//       return state
//   }
// }

import { combineReducers } from 'redux'
import headerReducer from '../header/reducer'
import footerReducer from '../footer/reducer'

const reducer = combineReducers({
  header: headerReducer,
  footer: footerReducer
})

export default reducer