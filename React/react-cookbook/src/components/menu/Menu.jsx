import React, { Fragment } from 'react'

import {
  MenuWrap
} from './StyledMenu'

export default function Menu(props) {
  let categoryData = props.categoryData && props.categoryData[props.dataType]
  let menuTabs = categoryData ? Object.keys(categoryData) : []

  return (
    <MenuWrap width="1px 0 0 0">
      <div className={`menu-tab menu-tab-${props.dataType}`}>
        <ul>
          {
            menuTabs.map((value,index) => (
              <Fragment key={value+index}>
                {
                  props.curTab === value ? (
                    <li className="active">
                      <span>{value}</span>
                    </li>
                  ) : (
                    <li
                      onClick={props.onChangeCurTab(value)}
                    >{value}</li>
                  )
                }
              </Fragment>
            ))
          }
        </ul>
      </div>
      <div className={`menu-body menu-body-${props.dataType}`}>
        <ul>
          {
            categoryData 
              && categoryData[props.curTab] 
              && categoryData[props.curTab].map((value,index) => (
              <li key={value+index}>
                {value}
              </li>
            ))
          }
        </ul>
      </div>
    </MenuWrap>
  )
}
