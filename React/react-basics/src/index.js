import React from 'react'
import ReactDOM from 'react-dom'
// import { BrowserRouter } from 'react-router-dom'

// import App from './App'
// import App from './views/01-component-element/Index'
// import App from './views/02-jsx/App'
// import App from './views/03-class-style/App'
// import App from './views/04-props-state/App'
// import App from './views/05-state/App'
// import App from './views/06-events/App'
// import App from './views/07-form/App'
// import App from './views/08-todo-list/App'
// import App from './views/09-lifetimes/App'
// import App from './views/10-context/App'
// import NewApp from './views/11-hoc/App'
// import App from './views/12-render-props/App'
// import App from './views/13-portal/App'
// import App from './views/14-my-redux/App'
// import store from './views/14-my-redux/store'
// import store from './views/15-redux/store'
// import App from './views/15-redux/App'
// import App from './views/15-redux/cart/App'
// import store from './views/15-redux/cart/store'
// import { Provider } from 'react-redux'
// import './views/15-redux/cart/mock/mock'

// import store from './views/20-saga/index.js'
// import App from './views/20-saga/App'

// import App from './views/16-router/App'
// import App from './views/16-router/App-link-hooks'
// import App from './views/17-hooks/App-hooks'
// import RootComponent from './views/17-hooks/RootComponent'
// import CountProvider from './views/17-hooks/counter/Provider'
// import App from './views/17-hooks/ref/App'
// import App from './views/17-hooks/useLayoutEffect/App'
// import App from './views/16-router/views/auth/App'
// import App from './views/16-router/views/prompt/App'
// import App from './views/16-router/App-nest'
// import App from './views/16-router/views/recursive/App'
// import App from './views/16-router/views/route-config/App'
// import App from './views/18-lazy-suspence/App'

import App from './views/21-transition/App'

const render = () => {
  ReactDOM.render(
    // <Provider store={store}><App></App></Provider>,
    <App></App>,
    document.querySelector('#root')
  )
}

render()


// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
// }, 2000)