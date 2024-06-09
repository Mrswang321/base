// pages/adv/index.js
Component({
  options: {
    styleIsolation: 'page-apply-shared'
  },

  /**
   * 页面的初始数据
   */
  data: {
    url: "http://www.baidu.com",
    title: 'world'
  },

  methods: {
    handleTap() {
      wx.navigateTo({
        url: './about/index?id=2'
      })
    }
  },

  ready() {
    setTimeout(()=> {
      this.setData({
        title: 'world !!!'
      })
    }, 2000)
  }
})