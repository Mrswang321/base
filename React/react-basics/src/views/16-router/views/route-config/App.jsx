import React from 'react'
import {
  Link,
  Route,
  Switch
} from 'react-router-dom'

const routes = [
  {
    path: '/',
    title: '首页',
    exact: true,
    component: () => <div>home</div>
  },
  {
    path: '/movie',
    title: '电影',
    component: Movie,
    routes: [
      {
        path: '/movie/intheater',
        title: '热映',
        component: () => <div>intheater</div>
      },
      {
        path: '/movie/comingsoon',
        title: '待映',
        component: () => <div>comingsoon</div>
      }
    ]
  }
]

export default function App() {
  return (
    <div>
      <ul>
        {
          routes.map(route => {
            return (
              <li key={route.path}><Link to={route.path}>{route.title}</Link></li>
            )
          })
        }
      </ul>
      <SubRoute routes={routes}></SubRoute>
    </div>
  )
}

function Movie({routes}) {
  return (
    <div>
      <ul>
        {
          routes.map(route => {
            return (
              <li key={route.path}><Link to={route.path}>{route.title}</Link></li>
            )
          })
        }
      </ul>
      <SubRoute routes={routes}></SubRoute>
    </div>
  )
}

function SubRoute({routes}) {
  return (
    <div>
      <Switch>
        {
          routes.map(route => {
            return (
              <Route
                path={route.path}
                key={route.path}
                exact={route.exact}
              >
                <route.component
                  routes={route.routes}
                ></route.component>
              </Route>
            )
          })
        }
      </Switch>
    </div>
  )
}
