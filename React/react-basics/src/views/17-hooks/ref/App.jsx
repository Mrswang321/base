import React, {useRef, forwardRef, useEffect, useImperativeHandle} from 'react'

const CustomInput = forwardRef(
  (props, ref) => {
    const inputRef = useRef()

    useImperativeHandle(ref, () => inputRef.current)
  
    return (
      <input ref={inputRef} type="text"/>
    )
  }
)

export default function App() {
  const appRef = useRef()

  useEffect(() => {
    // appRef.current.style.border = 'solid 5px red'
    appRef.current.focus()
  }, [])

  return (
    <div>
      <CustomInput ref={appRef}></CustomInput>
    </div>
  )
}
