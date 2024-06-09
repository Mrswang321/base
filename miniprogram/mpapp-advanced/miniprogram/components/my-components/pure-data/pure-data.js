// // components/my-components/pure-data/pure-data.js
// Component({
//   options: {
//     pureDataPattern: /^_/ // 指定所有 _ 开头的数据字段为纯数据字段
//   },
//   /**
//    * 组件的属性列表
//    */
//   properties: {
//     _title: {
//       type: String
//     }
//   },

//   /**
//    * 组件的初始数据
//    */
//   data: {
//     x: 100,
//     _x: 200
//   },

//   /**
//    * 组件的方法列表
//    */
//   methods: {

//   },

//   lifetimes: {
//     // attached() {
//     //   this._x = 1
//     // },
//     ready() {
//       console.log(this.data._x)
//       this.setData({
//         x: 200
//       })
//     }
//   }
// })


Component({
  data: {
    timeString: ''
  },
  options: {
    pureDataPattern: /^timestamp$/ // 将 timestamp 属性指定为纯数据字段
  },
  properties: {
    timestamp: Number,
  },
  observers: {
    timestamp: function () {
      // timestamp 被设置时，将它展示为可读时间字符串
      var timeString = new Date(this.data.timestamp).toLocaleString()
      this.setData({
        timeString: timeString
      })
    }
  }
})