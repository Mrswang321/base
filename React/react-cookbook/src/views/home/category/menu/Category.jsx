import React, { Component } from 'react'
import Menu from '@/components/menu/Menu'
import BScroll from 'better-scroll'
import {
  MenuWrap
} from './StyledMenu'

import useAnimate from '@/hoc/withAnimate'

@useAnimate
class Category extends Component {
  state = {
    curTab: '热门'
  }

  handleChangeCurTab = tab => {
    return () => {
      this.setState({
        curTab: tab
      })
    }
  }
  
  render() {
    return (
      <MenuWrap>
        <Menu 
          {...this.props} 
          {...this.state}
          onChangeCurTab={this.handleChangeCurTab}
        ></Menu>
      </MenuWrap>
    )
  }

  componentDidMount() {
    new BScroll('.menu-tab-category', {
      click: true
    })
    new BScroll('.menu-body-category', {
      click: true
    })
  }
}

export default Category