import React, { useContext } from 'react'
import useCount from './hooks/useCount'
import useAdd from './hooks/useAdd'
import { context } from './context/myContext'
import { ShowContext } from './RootComponent'
// import { defaultState, showReducer } from './reducers/show'

export default function App() {
  
  // let [state] = useReducer(showReducer, defaultState)
  let {state} = useContext(ShowContext)
  let {handleShowClick} = useCount()
  let {count, handleAddClick} = useAdd()
  let color = useContext(context)

  return (
    <div>
      {/* {
        <Consumer>
          {
            color => {
              return show && <h1 style={{color}}>{count.x}</h1>
            }
          }
        </Consumer>
      } */}
      {
        state.show && <h1 style={{color}}>{count.x}</h1>
      }
      <button onClick={handleAddClick}>+</button>
      <button onClick={handleShowClick}>show/hide</button>
    </div>
  )
}
