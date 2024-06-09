import React, { useCallback } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import useAuth from './hooks/useAuth'

export default function Login() {
  let history = useHistory()
  let location = useLocation()
  let auth = useAuth()

  let { from } = location.state || { from: { pathname: "/" } };
  let login = useCallback(
    () => {
      auth.signin(() => {
        history.replace(from);
      })
    },
    [auth, history, from],
  )

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}
