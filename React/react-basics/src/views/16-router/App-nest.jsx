import React, { Component } from 'react'
import {
  Route,
  Switch,
  Link,
  Redirect,
  withRouter
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

const Movie = withRouter(function (props) {
  let { match: {url} } = props
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
})

function Profile() {
  return (
    <div>profile</div>
  )
}

@withRouter
class App extends Component {
  
  render() {
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

  componentDidMount() {
    this.props.history.listen((route) => {
      console.log(route)
    })
  }
}

export default App