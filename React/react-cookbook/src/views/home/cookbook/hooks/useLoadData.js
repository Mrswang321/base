import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadDataSyncSaga } from '../actionCreator'

const useLoadData = () => {
  const list = useSelector(state => state.getIn(['cookbook', 'list']))

  const dispatch = useDispatch()

  useEffect(() => {
    // 拉取list数据
    dispatch(loadDataSyncSaga())
  }, [dispatch])

  return {
    list
  }
}

export {
  useLoadData
}