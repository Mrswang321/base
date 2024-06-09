import React from 'react'
import { NavBar, Icon, Switch } from 'antd-mobile'
import { MoreWrap } from './StyledMore'

export default function MoreUi(props) {
  return (
    <MoreWrap>
      <NavBar
        mode="dark"
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >更多</NavBar>
      <div className="show-map">
        显示地图：
        <Switch
          checked={props.isShowMap}
          onChange={props.handleChangeShowMap}
        ></Switch>
      </div>
    </MoreWrap>
  )
}
