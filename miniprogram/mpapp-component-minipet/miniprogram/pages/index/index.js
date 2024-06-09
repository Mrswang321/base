const { getSystemInfo, db } = getApp()

Component({
  data: {
    longitude: "",
    latitude: "",
    markers: []
  },

  methods: {
    onShow() {
      this.loadData()
    },
  
    onReady() {
      wx.getLocation({
        type: 'wgs84',
        success: (res) => {
          let { longitude, latitude } = res
          this.setData({
            longitude,
            latitude
          })
        }
      })
  
      this.mapCtx = wx.createMapContext('map')
      this.handleMoveToLocation()
  
      
      // let { safeArea } = getSystemInfo()
      // console.log(safeArea)
    },

    loadData() {
      // 加载markers
      const that = this
      db.collection('minipet').get({
        success: function(res) {
          let markers = res.data.map((data, index) => {
            let { id, latitude, longitude, type } = data
            return {
              id,
              latitude,
              longitude,
              width: '80rpx',
              height: '80rpx',
              iconPath: `../../resources/${type}.png`
            }
          })
  
          that.setData({
            markers
          })
        }
      })
    },
  
    handleMoveToLocation() {
      this.mapCtx.moveToLocation()
    },
  
    handleSearchButtonTap() {
      wx.navigateTo({
        url: '/pages/search/search',
      })
    },
  
    handleMarkerTap(e) {
      wx.navigateTo({
        url: '/pages/detail/detail?id=' + e.detail.markerId,
      })
    }
  }
})

