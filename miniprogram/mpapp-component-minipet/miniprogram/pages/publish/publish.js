let { db } = getApp()
const _ = require('underscore')

Component({

  /**
   * 页面的初始数据
   */
  data: {
    address: '点击选择，请勾选哦~',
    contact: '',
    message: '',

    isSucc: false,
    isSubmit: false,
    isComplete: false,

    rules: [
      {
        name: 'radio',
        rules: {required: true, message: '单选列表是必选项'},
      },
      {
        name: 'message',
        rules: {required: true, message: '请输入说明'},
      }, {
          name: 'contact',
          rules: {required: true, message: '请输入联系方式'},
      }
    ],

    formData: {
      
    },

    radioItems: [
      {name: '求购', value: 'buy', checked: true},
      {name: '转让', value: 'sell'}
    ],
  },

  methods: {
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

      this.selectComponent('#form').validate((valid, errors) => {
        // console.log('valid', valid, errors)
        if (!valid) {
            const firstError = Object.keys(errors)
            if (firstError.length) {
                this.setData({
                    error: errors[firstError[0]].message
                })

            }
        } else {

            const data = {
              ...this.static,
              address: this.data.address,
              ...this.data.formData,
              id: _.random(1, 10000000000) + new Date().getTime()
            }

            console.log(data)

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
        }
    })

      // if (this.data.message === '') {
      //   this.validMessage('请输入说明')
      //   return
      // }

      // if (this.data.contact === '') {
      //   this.validMessage('请输入联系方式')
      //   return
      // }

      
    },

    handleFeedbackSubmit(isSubmit) {
      this.setData({
        isSubmit
      })
    },

    radioChange(e) {
      var radioItems = this.data.radioItems;
      for (var i = 0, len = radioItems.length; i < len; ++i) {
          radioItems[i].checked = radioItems[i].value == e.detail.value;
      }

      this.setData({
          radioItems: radioItems,
          [`formData.radio`]: e.detail.value
      });
    },

    formInputChange(e) {
      const {field} = e.currentTarget.dataset
      this.setData({
        [`formData.${field}`]: e.detail.value
      })
    }
  }
})