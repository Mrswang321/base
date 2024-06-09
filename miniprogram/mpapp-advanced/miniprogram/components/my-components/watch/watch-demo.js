// components/my-components/watch/watch-demo.js
Component({

  properties: {
    title: {
      type: String,
      observer(value) {
        console.log(value)
      }
    },
  },

  lifetimes: {
    attached: function() {
      this.setData({
        numberA: 1,
        numberB: 2,
        sum: 0,
        x: {
          y: 200,
          w: {
            q: {
              j: 9000
            }
          }
        },
        z: ['a', 'b', 'c']
      })
    },

    ready() {
      this.setData({
        x: {
          y: 300,
          w: {
            q: {
              i: 1000
            }
          }
        },
        z: ['aaa', 'bbb']
      })
      // this.data.z[1] = 'aaaaaa'

      this.setData({
        "numberB": 500
      })
    }
    
  },

  observers: {
    'numberA, numberB': function(numberA, numberB) {
      // console.log(0)
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      this.setData({
        sum: numberA + numberB
      })
    },

    "x.y": function(y) {
      // console.log(y)
    },

    "z[1]": function(arrayElement) {
      // console.log(arrayElement)
    },

    "x.w.**": function(item) {
      console.log(item)
    },

    "**": function() {
      console.log('hello')
    }
  }
})
