import React, { Component } from 'react'
import {
  Route,
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom'

import Movie from './views/Movie'
import Theater from './views/Theater'
import Profile from './views/Profile'
import List from './views/List'
import Page404 from './views/Page404'

// function EnhanceMovie(props) {
//   return (
//     <>
//       <h1>Movie</h1>
//       <Movie></Movie>
//     </>
//   )
// }

import './views/style.css'

class App extends Component {
  // 包容性路由和排他性路由
  render() {
    // console.log(this.props)
    return (
      <>
        <NavLink
          to={{
            pathname: '/movie',
            search: '?id=2',
            // hash: '#ci=bj',
            state: {
              name: 'gp21'
            }
          }}
          activeClassName="active"
        >
          电影
        </NavLink>
        <NavLink
          to={{
            pathname: '/theater'
          }}
          activeClassName="active"
        > 影院 </NavLink>
        <NavLink
          to={{
            pathname: '/profile/favorite'
          }}
          activeClassName="active"
        > 我的 </NavLink>

        <Switch>
          <Redirect
            from="/"
            to="/movie"
            exact
          ></Redirect>
          <Route
            path="/movie"
            component={
              (props) => {
                return (
                  <>
                    <h1>Movie</h1>
                    <Movie {...props}></Movie>
                  </>
                )
              }
            }
            exact
          ></Route>
          <Route
            path="/theater"
            render={
              () => {
                return (
                  <Theater></Theater>
                )
              }
            }
          ></Route>
          {/* <Profile></Profile> */}
          {/* <Route
            path="/profile"
            children={<Profile></Profile>}
          ></Route> */}
          <Route
            path="/profile/:type"
            children={
              (props) => {
                // console.log(props)
                return (
                  <Profile {...props}></Profile>
                )
              }
            }
          ></Route>
          <Route
            path="/list"
          >
            {/* {
              (props) => {
                return (
                  <List {...props}></List>
                )
              }
            } */}
            {/* <List {...this.props}></List> */}
            <List></List>
          </Route>
          <Route
            component={Page404}
          ></Route>
        </Switch>
      </>
    )
  }
}

export default App