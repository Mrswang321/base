import React from 'react';
import {useLocation, useParams} from 'react-router-dom'

const Theater = () => {
  const params = useParams()
  const location = useLocation()

  return (
    <div>
      {location.pathname}
      theater {params.id}
    </div>
  )
}

export default Theater;