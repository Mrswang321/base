import React from 'react'
import { Grid } from 'antd-mobile'
import {
  HotCateWrap,
  HotCateHeaderWrap
} from './StyledCookBook'

export default function HotCate(props) {
  return (
    <HotCateWrap>
      <HotCateHeaderWrap
        width="0 0 1px 0"
      >热门分类</HotCateHeaderWrap>
      <Grid 
        data={props.hotcate}
        columnNum={4}
        hasLine={false}
        renderItem={dataItem => (
          <div className="hotcate-item">
            <img src={dataItem.img} alt="" />
            <div>
              <span>{dataItem.title}</span>
            </div>
          </div>
        )}
      />
    </HotCateWrap>
  )
}
