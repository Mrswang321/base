const app =  getApp()
const tools = require('../utils/tools')

Page({
  data: {
    title: 'hello',
    msg: 'Hello MINA!',
    show: true,
    list: ['a', 'b', 'c'],

    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    },

    handleFunction: 'handleButtonClick',

    markers: [
      {

      }
    ],

    inputValue: 'hello'
  },

  onLoad() {
    console.log(app.myData.userInfo)

    wx.getLocation({
      type: 'wgs84',
      success (res) {
        console.log(res)
      }
    })
    
    const total = tools.add(3, 4)
    console.log(total)


    wx.onCompassChange(function (res) {
      console.log(res.direction)
    })


    try {
      wx.setStorageSync('key', 'value')
      console.log('load data')
    } catch (e) {
      console.error(e)
    }

    const value = wx.getStorageSync("key")
    console.log(value)

    wx.setStorage({
      data: 'hello',
      key: 'key',
    }).then(res => {
      console.log(res)
    })

    wx.getStorage({
      key: 'key',
    }).then((res) => {
      console.log(res.data)
    })

    wx.request({
      url: 'https://m.lagou.com/listmore.json?pageNo=2&pageSize=15',
      success(res) {
        console.log(res)
      }
    })


    const query = wx.createSelectorQuery()
    query.select('#the-id').boundingClientRect(function(res){
      console.log('res.top', res.top) // #the-id 节点的上边界坐标（相对于显示区域）
    })
    query.selectViewport().scrollOffset(function(res){
      console.log(res.scrollLeft) // 显示区域的竖直滚动位置
    })
    query.exec()

  },

  onResize(res) {
    console.log(res.size.windowWidth) // 新的显示区域宽度
    console.log(res.size.windowHeight) // 新的显示区域高度
  },

  onReachBottom() {
    console.log(0)
  },

  // onLoad() {
  //   console.log('onLoad')
  // },

  onShow() {
    console.log('onShow')
  },

  onHide() {
    console.log('onHide')
  },

  onReady() {
    console.log('onReady')
  },

  onPullDownRefresh() {
    console.log('onPullDownRefresh')
  },

  onReachBottom() {
    console.log('onPullDownRefresh')
  },

  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  },

  onPageScroll() {
    console.log(0)
  },

  onTabItemTap() {
    console.log('onTabItemTap')
  },

  handleTap() {
    wx.navigateTo({
      url: '/pages/detail',
    })
  },

  handleChooseImage() {
    wx.chooseImage().then(res => console.log('res: ', res))
  },


  handleButtonClick(e) {
    console.log(e.target.dataset.url)
    console.log(e.mark)
  },

  handleTap1(e) {
    console.log('handleTap1')
    console.log(e.mark)
    console.log(e.detail)
  },
  handleTap2() {
    console.log('handleTap2')
  },
  handleTap3() {
    console.log('handleTap3')
  },
  handleTap4() {
    console.log('handleTap4')
  },


  handleImageTap(e) {
    console.log(e.detail)
  },

  handleInput(e) {
    console.log(e.detail.value)
  }
})