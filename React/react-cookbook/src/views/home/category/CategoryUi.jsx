import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Search from '@/components/search/Search'
import Category from './menu/Category'
import Material from './menu/Material'
import {
  CategoryWrap,
  NavUl,
  MenuWrap
} from './StyledCategory'

export default function CategoryUi(props) {
  let url = props.match.url
  return (
    <CategoryWrap>
      <nav>
        <NavUl
          color="#fff"
          width="1px"
          radius={0.15}
        >
          <li
            onClick={props.onTabClick('category')}
            className={props.type === 'category' ? 'active' : ''}
          >分类</li>
          <li
            onClick={props.onTabClick('material')}
            className={props.type === 'material' ? 'active' : ''}
          >食材</li>
          <li
            className={props.type === 'material' ? 'slider right' : 'slider'}
          ></li>
        </NavUl>
      </nav>
      <Search
        outerbg="#fff"
        innerbg="#efefef"
        hasborder={false}
      ></Search>
      <MenuWrap>
        <Redirect from={url} to={`${url}/category`} exact></Redirect>
        <Route 
          path={`${url}/category`}
          children={() => <Category {...props } dataType="category"></Category>}
        />
        <Route
          path={`${url}/material`}
          children={() => <Material {...props} dataType="material"></Material>}
        />
      </MenuWrap>
    </CategoryWrap>
  )
}
