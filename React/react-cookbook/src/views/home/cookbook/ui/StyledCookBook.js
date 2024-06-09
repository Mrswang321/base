import styled from 'styled-components'
import border from '@/components/styled/border'

const CookBookWrap = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
  #cookbook-scroll {
    flex: 1;
    overflow: hidden;
  }

  .hotcate-item {
    img {
      width: 60%;
      border-radius: .06rem;
      margin-bottom: .06rem;
    }
  }
`

const SwiperWrap = styled.div `
  width: 100%;
  height: 0;
  font-size: 0;
  position: relative;
  padding-bottom: 66.666667%;
  > div.swiper-wrap-box {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .am-carousel{
      width: 100%;
      touch-action: none;
      height: 100% !important;
    }
  }
`

const HeaderWrap = styled.div `
  height: .44rem;
  background-color: #ee742f;
  text-align: center;
  line-height: .44rem;
  color: #fff;
  font-size: .18rem;
`

const HotCateWrap = styled.div `
  background-color: #fff;
  padding-bottom: .2rem;
  
`

const HotCateHeaderWrap = border({
  Comp: (
    styled.h3 `
      height: .44rem;
      color: #666;
      line-height: .44rem;
      padding-left: .1rem;
    `
  )
})

const Top10Wrap = styled.div `
  h3 {
    height: .44rem;
    padding-left: .1rem;
    font-weight: normal;
    line-height: .44rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    padding-right: .1rem;
    li {
      width: 50%;
      padding-left: .1rem;
      margin-bottom: .1rem;
      p:first-child {
        height: 0;
        font-size: 0;
        padding-bottom: 66.666667%;
        position: relative;
        img {
          position: absolute;
          width: 100%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      }
      p:last-child {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        padding: .1rem 0;
        justify-content: center;
        align-items: center;
        b {
          font-size: .18rem;
          font-weight: 100;
        }
        span {
          color: #666;
        }
      }
    }
  }
`

export {
  CookBookWrap,
  SwiperWrap,
  HeaderWrap,
  HotCateWrap,
  Top10Wrap,
  HotCateHeaderWrap
}