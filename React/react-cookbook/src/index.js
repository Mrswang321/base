import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '@/store'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'

import '@/assets/styles/reset.css'
import 'animate.css'

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App></App>
    </Provider>
  </Router>,
  document.querySelector('#root')
)