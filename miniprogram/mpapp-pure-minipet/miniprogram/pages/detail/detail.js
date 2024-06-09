const { db } = getApp()
Page({
  data: {
    address: '',
    type: '',
    contact: '',
    message: ''
  },
  onLoad(options) {
    const that = this
    db.collection('minipet')
      .where({
        id: parseInt(options.id)
      })
      .get({
        success: function(res) {
          let { address, contact, type, message } = res.data[0]
          // console.log(res.data)
          that.setData({
            address, 
            type,
            contact,
            message
          })
        }
      })
  }
})