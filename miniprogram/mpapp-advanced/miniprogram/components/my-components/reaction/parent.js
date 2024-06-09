// components/my-components/reaction/parent.js
Component({
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
    handleMyEvent(e) {
      console.log(e.detail.id)
    },
    handleMyEvent2() {
      console.log('handleMyEvent2')
    }
  },

  lifetimes: {
    attached() {
      const child = this.selectComponent('#child')
      console.log(child.data.x)

      const child4 = this.selectComponent('#child4')
      console.log(child4.title);
    }
  }
})
