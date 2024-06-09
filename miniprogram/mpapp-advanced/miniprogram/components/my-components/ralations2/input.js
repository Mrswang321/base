const formBehavior = require('./form-behavior')
Component({
  behaviors: [formBehavior],
  relations: {
    './form': {
      type: 'ancestor',
      linked(target) {
        console.log(target.data.msg)
      }
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
