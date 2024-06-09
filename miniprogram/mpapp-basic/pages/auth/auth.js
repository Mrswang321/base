// pages/auth/auth.js
Page({
  handleTap() {
    wx.login({
      success: (loginResult) => {
        const code = loginResult.code
        
        wx.getUserProfile({
          success: (userResult) => {
            console.log(userResult.userInfo)
          }
        })
      }
    })
  }
})