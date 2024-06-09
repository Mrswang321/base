import useProvideAuth from './hooks/useProvideAuth'
import { authContext } from './context/authContext'

export default function ProvideAuth({ children }) {
  const auth = useProvideAuth()

  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}