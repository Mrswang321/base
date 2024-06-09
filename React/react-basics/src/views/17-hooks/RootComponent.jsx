import { createContext, useReducer } from 'react'
import { defaultState, showReducer } from './reducers/show'

export const ShowContext = createContext(null)

function RootComponent(props) {
  const [state, dispatch] = useReducer(showReducer, defaultState)

  return (
    <ShowContext.Provider value={{state, dispatch}}>
      {props.children}
    </ShowContext.Provider>
  )
}

export default RootComponent