// components/my-components/ralations/custom-li.js
Component({
  relations: {
    "./custom-ul": {
      type: "parent",
      linked(target) {
        
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
    text: 'line 1'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
