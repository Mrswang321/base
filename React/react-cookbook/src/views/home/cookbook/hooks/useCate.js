import { useEffect, useContext, useState } from 'react'
import { httpContext } from '@/context/httpContext'

const useCate = () => {
  const [hotcate, setHotCate] = useState([])
  const { http } = useContext(httpContext)
  useEffect(() => {
    ;(async function(){
      // 拉取hotcate数据
      let hotcate = await http.get({
        url: '/api/hotcat'
      })
      hotcate.push({
        title: '更多...'
      })

      setHotCate(hotcate)
    })()
  }, [http])

  return {
    hotcate
  }
}

export {
  useCate
}