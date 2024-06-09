import {useContext} from 'react'
// import { defaultState, showReducer } from '../reducers/show'
import { ShowContext } from '../RootComponent'

const useCount = () => {
  // let [show, setShow] = useState(true)
  // let [state, dispatch] = useReducer(showReducer, defaultState)
  let {state, dispatch} = useContext(ShowContext)

  const handleShowClick = () => {
    dispatch({
      type: 'setShow',
      show: !state.show
    })
  }

  return {
    handleShowClick
  }
}

export default useCount