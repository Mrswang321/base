import { createContext } from 'react'
import http from '@/utils/http'

const httpContext = createContext({
  http
})

export {
  httpContext
}