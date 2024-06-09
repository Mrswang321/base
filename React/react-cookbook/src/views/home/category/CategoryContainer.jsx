import React, { useState, useContext, useCallback } from 'react'
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom'
import CategoryUi from './CategoryUi'
import { httpContext } from '@/context/httpContext'
import { useEffect } from 'react/cjs/react.development'

let menuTabCategoryScroll = null
let menuBodyCategoryScroll = null
let menuTabMaterialScroll = null
let menuBodyMaterialScroll = null

function Category(props) {
  const location = useLocation()
  const history = useHistory()
  const match = useRouteMatch()
  const [type, setType] = useState('category')
  const [categoryData, setCategoryData] = useState(null)

  const { http } = useContext(httpContext)

  const handleTabClick = useCallback(
    (type) => {
      return () => {
        setType(type)
        history.push(`${match.url}/${type}`)
      }
    },
    [history, match]
  )

  useEffect(() => {
    ;(async function(){
      let categoryData = (await http.get({
        url: '/api/category'
      })).data

      setCategoryData(categoryData)

      if (type === 'category') {
        menuTabCategoryScroll && menuTabCategoryScroll.refresh()
        menuBodyCategoryScroll && menuBodyCategoryScroll.refresh()
      } else {
        menuTabMaterialScroll && menuTabMaterialScroll.refresh()
        menuBodyMaterialScroll && menuBodyMaterialScroll.refresh()
      }
  
      // console.log(document.querySelector('.menu-tab'))
      // console.log('from container')
  
      // 防刷新,tab复位
      // let urlArr = location.pathname.split('/')
      // let type = urlArr[urlArr.length-1]
      // setType(type)
    })()
  }, [http, location, type])

  return (
    <CategoryUi 
      {...props}
      type={type}
      categoryData={categoryData}
      onTabClick={handleTabClick}
      match={match}
    ></CategoryUi>
  )
}

export default Category