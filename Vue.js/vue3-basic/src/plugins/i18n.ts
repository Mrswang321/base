export default {
  install: (app, options) => {
    app.config.globalProperties.$translater = (key) => {
      return key.split('.')
        .reduce((o, i) => { 
          console.log(o)
          if (o) return o[i] 
        }, options)
    }

    app.provide('i18n', options)

    app.directive('my-directive', {
      mounted (el, binding, vnode, oldVnode) {
        // some logic ...
      }
    })

    app.mixin({
      created() {
        // some logic ...
      }
    })
  }
}