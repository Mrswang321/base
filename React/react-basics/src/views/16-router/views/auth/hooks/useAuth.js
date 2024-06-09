import { useContext } from 'react'

import { authContext } from '../context/authContext'

export default function useAuth() {
  return useContext(authContext)
}