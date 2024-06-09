import React, { Component } from 'react';

class Child4 extends Component {
  state = {
    isShow: true,
    list: [
      'a',
      'b',
      'c'
    ],
    obj: {
      a: 0,
      b: 1,
      c: 2
    },
    html: '<h1>title</h1>'
  }

  render() {
    let { list, isShow, obj } = this.state
    return (
      <>
        {
          isShow && (
            list.map((value,index) => <div key={index}>{value}</div>)
          )
        }
        {
          Object.keys(obj).map(key => <div key={key}>{key} - {obj[key]}</div>)
        }
        <div dangerouslySetInnerHTML={{__html: this.state.html}}></div>
        <label htmlFor></label>
      </>
    )
  }
}

export default Child4;