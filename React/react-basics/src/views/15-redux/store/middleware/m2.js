const m2 = ({dispatch, getState}) => {
  return (next) => {
    return (action) => {
      // console.log(action)
      // if (action.payload) {
      //   next({
      //     payload: action.payload + '!!!'
      //   })
      // }
      console.log(action)

      next(action)
    }
  }
}

export default m2