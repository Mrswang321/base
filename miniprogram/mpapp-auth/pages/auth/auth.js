// pages/auth/auth.js
Page({
  data: {
    nickName: '',
    avatarUrl: '',
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName')
  },

  _login() {
    wx.login({
      success: (res) => {
        const code = res.code

        wx.request({
          url: 'http://localhost:3000/weapp-auth?code=' + code,
          success: (res) => {
            wx.setStorageSync('token', res.data)
          }
        })
      }
    })
  },

  onLoad() {
    // console.log(wx.canIUse('button.open-type.getUserInfo'))
    this._login()
  },

  handleTap() {
    wx.getUserProfile({
      desc: '展示用户信息',
      success: (res) => {
        this.setData({
          nickName: res.userInfo.nickName,
          avatarUrl: res.userInfo.avatarUrl
        })
        console.log(wx.canIUse('button.open-type.getUserInfo'))
      }
    })
  },

  getPhoneNumber(e) {
    wx.request({
      url: 'http://localhost:3000/weapp-getphonenumber',
      method: 'post',
      data: {
        token: wx.getStorageSync('token'),
        encryptedData: e.detail.encryptedData,
        iv: e.detail.iv
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: (res) => {
        console.log(res.data)
      }
    })
  },

  handleSignin() {
    wx.checkSession({
      success: (res) => {
        if (res.errMsg === 'checkSession:ok') {
          wx.request({
            url: 'http://localhost:3000/weapp-auth',
            method: 'post',
            data: {
              token: wx.getStorageSync('token')
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded' // 默认值
            },
            success: (res) => {
              console.log(res.data)
            }
          })
        } else {
          this._login()
        }
      },
    })
  }
})