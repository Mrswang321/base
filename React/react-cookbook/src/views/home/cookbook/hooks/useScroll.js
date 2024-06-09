import { useEffect } from 'react'
import BScroll from 'better-scroll'
import { useUpdate } from '@/hooks/useUpdate'

let bscroll = null

const useScroll = () => {
  useEffect(() => {
    // 区域滚动
    bscroll = new BScroll('#cookbook-scroll')
  }, [])

  useUpdate(() => {
    // 当列表数据更新的时候，让scroll根据新的高度重新计算
    bscroll && bscroll.refresh()
  })
}

export {
  useScroll
}