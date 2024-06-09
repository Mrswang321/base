import React from 'react'
import CookBookUi from '../ui/CookBookUi'

import { useLoadData } from '../hooks/useLoadData'
import { useCate } from '../hooks/useCate'
import { useScroll } from '../hooks/useScroll'

function CookBook(props) {
  const { list} = useLoadData()
  const { hotcate } = useCate()
  useScroll()

  return (
    <CookBookUi
      {...props}
      list={list}
      hotcate={hotcate}
    ></CookBookUi>
  )
}

export default CookBook
