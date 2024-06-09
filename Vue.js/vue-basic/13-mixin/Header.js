import mixins from  './mixins-local.js'

Vue.component('my-header', {
  mixins: [mixins],
  template: `
    <div>
      <header>title {{x2}}</header>
      <button @click="handleClick">header button</button>
    </div>
  `,

  mounted() {
    // console.log('child')
    // this.x = 100
    // console.log(this.x)
  },

  // 生命周期函数：mixin和组件自定义的生命周期函数都会执行
  beforeCreate() {
    console.log('header beforeCreate')
  }
})