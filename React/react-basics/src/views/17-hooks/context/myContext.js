import { createContext } from 'react'

let context = createContext('red')
let { Provider, Consumer } = context

export {
  Provider,
  Consumer,
  context
}