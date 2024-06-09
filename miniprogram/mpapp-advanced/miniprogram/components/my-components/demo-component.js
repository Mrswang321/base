// components/my-component/demo-component.js
Component({
  options: {
    multipleSlots: true,
    styleIsolation: 'isolated'
  },

  properties: {
    url: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    title: 'hello'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  lifetimes: {
    attached() {
      console.log(this.data.url)
    }
  }
})
