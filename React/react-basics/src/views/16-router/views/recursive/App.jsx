import React from 'react'
import { Route, Switch, Redirect, useParams, Link, useRouteMatch } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/:id">
          <Friends></Friends>
        </Route>
        <Route path="/">
          <Redirect to="/0"></Redirect>
        </Route>
      </Switch>
    </div>
  )
}

function Friends() {
  let { id } = useParams()
  let { url } = useRouteMatch()
  let person = find(id)

  return (
    <>
      <h3>{person.name}`s friends are: </h3>
      <ul>
        {
          person.friends.map(id => {
            return (
              <li key={id}>
                <Link to={`${url}/${id}`}>{find(id).name}</Link>
              </li>
            )
          })
        }
      </ul>
      <Switch>
        <Route path={`${url}/:id`}>
          <Friends></Friends>
        </Route>
      </Switch>
    </>
  )
}


const PEEPS = [
  { id: 0, name: "Michelle", friends: [1, 2, 3] },
  { id: 1, name: "Sean", friends: [0, 3] },
  { id: 2, name: "Kim", friends: [0, 1, 3] },
  { id: 3, name: "David", friends: [1, 2] }
];

function find(id) {
  return PEEPS.find(p => p.id === ~~id)
}