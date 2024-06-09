// components/my-components/reaction/child.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: Boolean,
      optionalTypes: [Number],
      value: 'from parent'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    x: 100
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap() {
      this.triggerEvent('myevent', { id: 100 }, {
        bubbles: true,
        composed: true,
        capturePhase: true
      })
    },

    handleMyEvent() {
      console.log('child handleMyEvent')
    }
  }
})
