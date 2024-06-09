export const defaultState = {
  show: true
} 

export const showReducer = (state, action) => {
  switch (action.type) {
    case 'setShow':
      return {
        show: action.show
      }
  
    default:
      return state
  }
}