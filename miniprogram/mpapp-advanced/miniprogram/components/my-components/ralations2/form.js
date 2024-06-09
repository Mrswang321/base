const formBehavior = require('./form-behavior')
Component({
  relations: {
    'formBehavior': {
      type: 'descendant',
      target: formBehavior,
      linked(target) {
        console.log(target.is)
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
    msg: 'hahaha'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
