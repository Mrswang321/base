import React from 'react'
import { MapWrap } from './StyledMap'

export default function Map() {
  return (
    <MapWrap>
      <iframe src="/map.html" title="map" frameBorder="0"></iframe>
    </MapWrap>
  )
}
