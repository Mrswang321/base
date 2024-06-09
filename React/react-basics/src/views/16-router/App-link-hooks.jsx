import React, { Component, useCallback } from 'react'
import { 
  Route,
  Switch,
  Redirect,
  useHistory,
  useRouteMatch
} from 'react-router-dom'

import Movie from './views/Movie'
import Theater from './views/Theater'
import Profile from './views/Profile'

import './views/style.css'

const MyLink = (props) => {
  let {name, path} = props
  let { push } = useHistory()
  
  // 无路由渲染的组件需要path才能获得match对象
  let match = useRouteMatch({
    path
  })

  const handleClick = useCallback(
    (path) => {
      return () => {
        push(path)
      }
    },
    [push],
  )

  return (
    <li
      className={match ? 'active' : ''}
      onClick={handleClick(path)}
    >{name}</li>
  )
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
        path: '/theater/100'
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
                <MyLink
                  key={value.id}
                  {...value}
                ></MyLink>
                // <Route
                //   path={value.path}
                //   key={value.id}
                //   children={() => {
                //     return (
                //       <MyLink {...value}></MyLink>
                //     )
                //   }}
                // ></Route>
              )
            })
          }
        </ul>
        <Switch>
          <Redirect from="/" to="/movie" exact></Redirect>
          <Route path="/movie">
            <Movie></Movie>
          </Route>
          <Route path="/theater/:id">
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