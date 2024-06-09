const MyPlugin = {}

MyPlugin.install = (Vue, options) => {
  Vue.myvar = 'static-hello'
  Vue.myfoo = () => {
    console.log('static-world')
  }

  Vue.prototype.$myvar = 'hello'

  Vue.prototype.$myfoo = () => {
    console.log('world')
  }

  Vue.component('my-component', {
    template: `
      <div>my-component</div>
    `
  })

  Vue.mixin({
    mymounted() {
      console.log('mymounted.')
    }
  })
}

export default MyPlugin