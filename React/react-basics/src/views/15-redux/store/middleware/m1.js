const m1 = ({dispatch, getState}) => {
  return (next) => {
    return (action) => {
      console.log(action)
      if (action.payload) {
        next({
          ...action,
          payload: action.payload + '!!!'
        })
      } else {
        next(action)
      }

    }
  }
}

export default m1