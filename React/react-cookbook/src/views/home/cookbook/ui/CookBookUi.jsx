import React from 'react'
import Swiper from './Swiper'
import Header from './Header'
import Search from '@/components/search/Search'
import HotCate from './HotCate'
import Top10 from './Top10'
import { CookBookWrap } from './StyledCookBook'

export default function CookBookUi(props) {
  return (
    <CookBookWrap>
      <Header></Header>
      <div id="cookbook-scroll">
        <div>
          <Swiper {...props}></Swiper>
          <Search
            outerbg="#f5f5f5"
            innerbg="#fff"
            hasborder={true}
          ></Search>
          <HotCate hotcate={props.hotcate}></HotCate>
          <Top10 { ...props }></Top10>
        </div>
      </div>
    </CookBookWrap>
  )
}
