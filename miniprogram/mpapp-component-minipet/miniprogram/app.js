App({
  getSystemInfo() {
    return wx.getSystemInfoSync()
  },

  onLaunch() {
    wx.cloud.init({
      env: 'minipet-2gn3qb9080e80522'
    })
    
    this.db = wx.cloud.database()
  }
})