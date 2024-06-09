import { Component, createElement } from 'react'

export default class App extends Component {
  render() {
    // return (
    //   <div className='app' id='appRoot'>
    //     <h1 className='title'>欢迎进入React的世界</h1>
    //     <p>
    //       React.js 是一个帮助你构建页面 UI 的库
    //     </p>
    //   </div>
    // )

    return (
      createElement(
        'div',
        {
          className: 'app',
          id: 'appRoot'
        },
        createElement(
          'h1',
          {
            className: 'title',
          },
          '欢迎进入React的世界'
        ),
        createElement(
          'p',
          null,
          'React.js 是一个帮助你构建页面 UI 的库'
        )
      )
    )
  }
}
