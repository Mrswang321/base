let { db } = getApp()
const _ = require('underscore')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '点击选择，请勾选哦~',
    contact: '',
    message: '',

    isSucc: false,
    isSubmit: false,
    isComplete: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.static = {
      type: 'buy'
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  handleChooseLocation() {
    wx.chooseLocation({
      success: (res) => {
        this.setData({
          address: res.address
        })
        this.static.longitude = res.longitude
        this.static.latitude = res.latitude
      }
    })
  },

  radioChange(e) {
    this.static.type = e.detail.value
  },

  validMessage(title) {
    wx.showToast({
      title,
      icon: 'loading',
      duration: 1500
    })
  },

  handleSubmit() {
    if (this.data.address === '点击选择，请勾选哦~') {
      this.validMessage('请选择地址')
      return  
    }

    if (this.data.message === '') {
      this.validMessage('请输入说明')
      return
    }

    if (this.data.contact === '') {
      this.validMessage('请输入联系方式')
      return
    }

    const data = {
      ...this.static,
      ...this.data,
      id: _.random(1, 10000000000) + new Date().getTime()
    }

    this.setData({
      isSubmit: true
    })

    // 添加数据到云端数据库
    try {
      db.collection('minipet').add({
        data,
        success: (res) => {
          this.setData({
            isSucc: true
          })
        },
        fail: (err) => {
          console.log(err)
          this.setData({
            isSucc: false
          })
        },
        complete: () => {
          this.setData({
            isComplete: true
          })
        }
      })
    } catch (err) {
      console.log(err)
    }
  },

  handleFeedbackButtonTap () {
    if (this.data.isSucc) {
      wx.navigateBack()
    } else {
      this.setData({
        isSubmit: false
      })
    }
  }
})