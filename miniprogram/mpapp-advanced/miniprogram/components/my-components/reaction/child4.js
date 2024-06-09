// components/my-components/reaction/child4.js
Component({
  behaviors: ['wx://component-export'],
  export() {
    return {
      title: this.data.title
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    title: 'hello world'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    submit(e) {
      console.log(e.detail);
    }
  }
})
