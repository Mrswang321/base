import { useState, useEffect } from 'react'

const useAdd = () => {
  let [count, setCount] = useState({x: 0})
  let [title, setTitle] = useState('hello')

  // 1\useEffect可以定义多次
  // 2\传两个参数，一个参数是回调函数，第二个参数是一个数组，
  // 数组可以为空，如果回调函数里引用了state, 需要在数组里定义state
  // 第二个参数可以为空，这样回调函数在组建更新的时候总是被调用
  // 3\在回调函数里，可以返回一个函数，这个函数可以当componentWillUnmount使用
  
  useEffect(() => {
    // console.log(1)
    document.title = title + count.x
  }, [count, title])

  // componentDidMount
  useEffect(() => {
    // console.log(0)

    // componentWillUnMount
    return () => {
      console.log('unmount.')
    }
  }, [])

  const handleAddClick = () => {
    setCount({x: count.x + 1})
    setTitle('world')
  }

  return {
    count,
    title,
    handleAddClick
  }
}

export default useAdd