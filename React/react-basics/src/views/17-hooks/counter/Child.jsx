import React, { useEffect, useState, useContext, useMemo } from 'react'
import { countContext } from './Provider'
// import Child1 from './Child1'
// import Child2 from './Child2'

// let c1 = 100
// let c2 = 200

const setC = (c2) => {
  console.log(0)
  return c2 + 100
}

export default function Child() {
  // let [c1, setC1] = useState(100)
  let [c2, setC2] = useState(200)

  let {state} = useContext(countContext)

  // let child1 = useMemo(() => <Child1 count={c1}></Child1>, [c1])
  // let child2 = useMemo(() => <Child2 count={c2}></Child2>, [c2])

  let c11 = useMemo(() => setC(c2), [c2])

  useEffect(() => {
    setC2(200)
  }, [])

  return (
    <div>
      child {state.count} <br/>
      {c11}
      {/* {child1}
      {child2} */}
    </div>
  )
}
