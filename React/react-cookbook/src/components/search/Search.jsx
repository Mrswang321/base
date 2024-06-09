import React from 'react'
import { Icon } from 'antd-mobile'
import {
  SearchWrap,
  SearchInnerWrap
} from './StyledSearch'

export default function Search(props) {
  return (
    <>
      <SearchWrap {...props}>
        <SearchInnerWrap { ...props } color="#ee742f" radius={0.06}>
          <Icon className="icon" type="search" size="xs" color="#ee742f"/>
          想吃什么搜这里，如川菜
        </SearchInnerWrap>
      </SearchWrap>
    </>
  )
}
