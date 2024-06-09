// components/my-components/reaction/child2.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    title: 'hello'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleMyEvent() {
      console.log('child2 handleMyEvent')
    }
  },

  lifetimes: {
    created() {
      // console.log(this.data.title)
      // this.setData({
      //   title: 'world'
      // })
      // this.data.aa = 'world'
    },
    attached() {
      // console.log(this.data.title)
      this.setData({
        // title: 'aaa'
        aa: 'aaaa'
      })
    },
    ready() {
      setTimeout(() => {
        this.setData({
          aa: 'aa'
        })
      }, 2000)
    }
  },

  pageLifetimes: {
    show() {
      console.log('show')
    },

    hide() {
      console.log('hide')
    }
  }
})
