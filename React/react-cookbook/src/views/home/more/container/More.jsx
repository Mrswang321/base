import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MoreUi from '../ui/MoreUi'
import { changeSaga } from '../actionCreator'

function More() {
  const dispatch = useDispatch()
  const isShowMap = useSelector(state => state.getIn(['more', 'isShowMap']))
  const handleChangeShowMap = (isShowMap) => {
    dispatch(changeSaga(isShowMap))
  }

  return (
    <MoreUi 
      isShowMap={isShowMap} 
      dispatch={dispatch} 
      handleChangeShowMap={handleChangeShowMap}
    ></MoreUi>
  )
}

export default More
