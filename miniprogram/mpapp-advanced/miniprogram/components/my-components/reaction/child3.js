// const myBehavior = require('./myBehavior')
import myBehavior from './myBehavior'
Component({
  behaviors: [myBehavior],
  properties: {
    myProperty: {
      type: String
    }
  },

  data: {
    myData: 'my-component-data',
    myBehaviorData: 'world!!!'
  },

  methods: {
    myMethod: function () {
      console.log('[my-component] log by myMethod')
    },
  },

  lifetimes: {
    ready() {
      console.log(this.data.myProperty);
      console.log(this.data.myBehaviorProperty)
      console.log(this.data.myData)
      console.log(this.data.myBehaviorData)

      this.myMethod()
      // this.myBehaviorMethod()
    }
  }
})