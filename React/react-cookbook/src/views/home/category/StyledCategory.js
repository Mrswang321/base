import styled from 'styled-components'
import border from '@/components/styled/border'

const CategoryWrap = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
  nav {
    height: .44rem;
    background-color: #ee742f;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const NavUl = border({
  Comp: (
    styled.ul `
      width: 1.4rem;
      height: .3rem;
      display: flex;
      position: relative;
      li {
        flex: 1;
        line-height: .3rem;
        text-align: center;
        color: #fff;
        transition: left 100ms ease-in;
        &.slider {
          width: 50%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 1000;
          position: absolute;
          border-radius: .15rem;
          background-color: #fff;
        }
        &.slider.right {
          left: 50%;
        }
        &.active {
          color: #ee742f;
          z-index: 1001;
        }
      }
    `
  )
})

const MenuWrap = styled.div `
  overflow: hidden;
  flex: 1;
  position: relative;
`

export {
  CategoryWrap,
  NavUl,
  MenuWrap
}