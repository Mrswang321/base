import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import useAuth from './hooks/useAuth'

export default function AuthButton() {
  let history = useHistory()
  let auth = useAuth()

  let signout = useCallback(
    () => {
      auth.signout(() => history.push("/"));
    },
    [auth, history],
  )

  return auth.user ? (
    <p>
      Welcome!{" "}
      <button
        onClick={signout}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}