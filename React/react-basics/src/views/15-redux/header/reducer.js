const defaultState = { headerText: 'header' }
const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case 'changeText':
      return {
        headerText: action.text
      }
    
    default:
      return state
  }
}

export default reducer