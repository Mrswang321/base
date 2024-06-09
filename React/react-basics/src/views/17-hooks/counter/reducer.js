const defaultState = {
  count: 0
}

const countReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return {
        count: state.count + action.num
      }

    case 'minus':
      return {
        count: state.count - action.num
      }
  
    default:
      return state
  }
}

export {
  defaultState,
  countReducer
}

