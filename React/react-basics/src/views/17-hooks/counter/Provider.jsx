import { createContext, useReducer } from 'react'
import { defaultState, countReducer } from './reducer'

export const countContext = createContext()

function CountPriver(props) {
  let [state, dispatch] = useReducer(countReducer, defaultState)

  return (
    <countContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {props.children}
    </countContext.Provider>
  )
}

export default CountPriver