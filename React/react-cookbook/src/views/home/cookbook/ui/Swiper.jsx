import React from 'react'
import { Carousel, ActivityIndicator } from 'antd-mobile'
import {
  SwiperWrap,
} from './StyledCookBook'

export default function Swiper(props) {
  return (
    <SwiperWrap>
      <div className="swiper-wrap-box">
        {
          props.list.length > 0 ? (
            <Carousel
              autoplay={true}
              infinite
            >
              {
                props.list.slice(0, 5).map(
                  (value) => {
                    return (
                      <img key={value.id} src={value.img} alt=""/>
                    )
                  }
                )
              }
            </Carousel>
          ) : (
            <ActivityIndicator></ActivityIndicator>
          )
        }
      </div>
    </SwiperWrap>
  )
}
