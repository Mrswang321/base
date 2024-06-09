import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from '@/views/home/Home'
import List from '@/views/list/List'

export default function App() {
  return (
    <Switch>
      <Redirect from="/" to="/home" exact></Redirect>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/list">
        <List></List>
      </Route>
    </Switch>
  )
}