import React from "react"

import {
  Switch,
  Route,
  Link
} from "react-router-dom"

import ProvideAuth from './ProvideAuth'
import PrivateRoute from './PrivateRoute'
import Login from './Login'
import Public from './Public'
import Protected from './Protected'
import AuthButton from './AuthButton'

export default function AuthExample() {
  return (
    <ProvideAuth>
      <AuthButton></AuthButton>
      <ul>
        <li>
          <Link to="/public">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/public">
          <Public />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/protected">
          <Protected></Protected>
        </PrivateRoute>
      </Switch>
    </ProvideAuth>
  )
}
