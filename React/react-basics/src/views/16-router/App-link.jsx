import React, { Component } from 'react'
import { 
  Route,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom'

import Movie from './views/Movie'
import Theater from './views/Theater'
import Profile from './views/Profile'

import './views/style.css'

@withRouter
class MyLink extends Component {
  handleClick = (path) => {
    let { history } = this.props
    return () => {
      history.push(path)
    }
  }

  render() {
    let {name, path, match} = this.props
    return (
      <li
        className={match ? 'active' : ''}
        onClick={this.handleClick(path)}
      >{name}</li>
    )
  }
}

class App extends Component {
  state = {
    routes: [
      {
        id: '001',
        name: '电影',
        path: '/movie'
      },
      {
        id: '002',
        name: '影院',
        path: '/theater'
      },
      {
        id: '003',
        name: '我的',
        path: '/profile'
      }
    ]
  }

  render() {
    return (
      <>
        <ul>
          {
            this.state.routes.map(value => {
              return (
                // <MyLink
                //   key={value.id}
                //   {...value}
                // ></MyLink>
                <Route
                  path={value.path}
                  key={value.id}
                  children={() => {
                    return (
                      <MyLink {...value}></MyLink>
                    )
                  }}
                ></Route>
              )
            })
          }
        </ul>
        <Switch>
          <Redirect from="/" to="/movie" exact></Redirect>
          <Route path="/movie">
            <Movie></Movie>
          </Route>
          <Route path="/theater">
            <Theater></Theater>
          </Route>
          <Route path="/profile">
            <Profile></Profile>
          </Route>
        </Switch>
      </>
    )
  }
}

export default App;