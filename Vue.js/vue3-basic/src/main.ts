import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18nPlugin from './plugins/i18n'

const app: any = createApp(App)

app.use(store)
app.use(router)
app.use(i18nPlugin, {
  greetings: {
    hi: 'Hallo!'
  }
})
app.mount('#app')

// new Vue({
//   store,
//   router,
//   render: h => h(App)
// })

// Vue.use()

// 挂载5秒后，应用将被卸载
// setTimeout(() => app.unmount('#app'), 5000)