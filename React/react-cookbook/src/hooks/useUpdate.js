import { useEffect, useRef } from 'react'

function useUpdate(fn) { 
  // useRef 创建一个引用 
  const mounting = useRef(true)
  useEffect(() => { 
    if (mounting.current) { 
      mounting.current = false
    } else { 
      fn()
    } 
  })
}

export {
  useUpdate
}