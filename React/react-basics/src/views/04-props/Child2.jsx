import React from 'react'

function Child2(props) {
  return (
    <div>
      {props.title}
    </div>
  )
}

Child2.defaultProps = {
  title: 'hello'
}

// Child2.propTypes

export default Child2