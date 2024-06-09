const { db } = getApp()

Page({
  data: {
    keywords: '',
    list: []
  },

  handleSearchTap() {
    const _ = db.command
    const reg = new RegExp(this.data.keywords, 'gi')
    const that = this
    db.collection('minipet').where(_.or(
      [
        {
          message: reg
        },
        {
          contact: reg
        }
      ]
    ))
    .get({
      success: function(res) {
        that.setData({
          list: res.data
        })
      }
    })
  }
})