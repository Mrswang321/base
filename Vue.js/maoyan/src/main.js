import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

import '@/mock'

Vue.config.productionTip = false

import Http from '@/utils/http'
Vue.prototype.$http = new Http()

// 全局过滤器
import '@/filters/img'

import './assets/reset.css'
import './assets/maoyan.css'
import 'animate.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')