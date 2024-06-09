// components/my-components/ralations/custom-ul.js
Component({
  relations: {
    "./custom-li": {
      type: "child",
      linked(target) {
        console.log(target.data.text)
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
