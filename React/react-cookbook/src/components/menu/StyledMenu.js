import styled from 'styled-components'
import border from '@/components/styled/border'

const MenuWrap = border({
  Comp: (
    styled.div `
      display: flex;
      height: 100%;
      div.menu-tab {
        width: 1rem;
        ul{
          li {
            height: .5rem;
            line-height: .5rem;
            text-align: center;
            &.active {
              background-color: #fff;
              color: #ee742f;
            }
            span {
              display: inline-block;
              height: 100%;
              border-bottom: solid 2px #ee742f;
            }
          }
        }
      }
      div.menu-body {
        flex: 1;
        height: 100%;
        background-color: #fff;
        ul {
          display: flex;
          flex-wrap: wrap;
          align-content: flex-start;
          padding: .3rem;
          li {
            width: 33.333333%;
            height: .5rem;
            text-align: center;
          }
        }
      }
    `
  )
})

export {
  MenuWrap
}