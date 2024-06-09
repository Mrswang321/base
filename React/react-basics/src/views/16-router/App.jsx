import React from 'react'
import {
  Route,
  Switch,
  Link,
  Redirect,
  useRouteMatch
} from 'react-router-dom'

function InTheaters() {
  return (
    <div>in-theaters</div>
  )
}

function Comingsoon() {
  return (
    <div>comingsoon</div>
  )
}

const Movie = function (props) {
  let { url } = useRouteMatch()

  return (
    <>
      <h1>movie</h1>
      <Switch>
        <Redirect from={url} to={`${url}/intheater`} exact></Redirect>
        <Route path={`${url}/intheater`}>
          <InTheaters></InTheaters>
        </Route>
        <Route path={`${url}/comingsoon`}>
          <Comingsoon></Comingsoon>
        </Route>
      </Switch>
    </>
  )
}

function Profile() {
  return (
    <div>profile</div>
  )
}

const App = (props) => {
  return (
    <>
      <ul>
        <li><Link to="/movie">电影</Link></li>
        <li><Link to="/profile">我的</Link></li>
      </ul>
      <Switch>
        <Redirect from="/" to="/movie" exact></Redirect>
        <Route path="/movie">
          <Movie></Movie>
        </Route>
        <Route path="/profile">
          <Profile></Profile>
        </Route>
      </Switch>
    </>
  )
}

export default App