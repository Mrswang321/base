import React from 'react'
import { Top10Wrap } from './StyledCookBook'

export default function Top10(props) {
  return (
    <Top10Wrap>
      <h3>精品好菜</h3>
      <ul>
        {
          props.list.slice(0, 10).map(value => (
            <li key={value.id}>
              <p>
                <img src={value.img} alt={value.name}/>
              </p>
              <p>
                <b>{value.name}</b>
                <span>{value.all_click}浏览 {value.favorites}收藏</span>
              </p>
            </li>
          ))
        }
      </ul>
    </Top10Wrap>
  )
}
