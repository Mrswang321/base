import React, { useState, useContext, useEffect } from 'react'
import BScroll from 'better-scroll'
import { useSelector, useDispatch } from 'react-redux'
import CookBookUi from '../ui/CookBookUi'
import { loadDataSyncSaga } from '../actionCreator'
import { httpContext } from '@/context/httpContext'
import { useUpdate } from '@/hooks/useUpdate'

let bscroll = null

function CookBook(props) {
  const { http } = useContext(httpContext)
  const [hotcate, setHotCate] = useState([])
  const list = useSelector(state => state.getIn(['cookbook', 'list']))
  const dispatch = useDispatch()

  useEffect(() => {
    ;(async function() {
      // 拉取list数据
      dispatch(loadDataSyncSaga())
      // 拉取hotcate数据
      let hotcate = await http.get({
        url: '/api/hotcat'
      })
      hotcate.push({
        title: '更多...'
      })

      setHotCate(hotcate)

      // 区域滚动
      bscroll = new BScroll('#cookbook-scroll')
    })()
  }, [http, dispatch])

  useUpdate(() => {
    // 当列表数据更新的时候，让scroll根据新的高度重新计算
    bscroll && bscroll.refresh()
  })

  return (
    <CookBookUi
      {...props}
      list={list}
      hotcate={hotcate}
    ></CookBookUi>
  )
}

export default CookBook
