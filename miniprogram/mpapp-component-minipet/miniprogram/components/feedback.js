// components/feedback.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isSucc: {
      type: Boolean
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleFeedbackButtonTap () {
      if (this.data.isSucc) {
        wx.navigateBack()
      } else {
        this.triggerEvent('onFeedbackSubmit', false)
      }
    }
  }
})
