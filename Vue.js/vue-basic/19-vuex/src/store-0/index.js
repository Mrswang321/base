import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import m1 from './modules/m1'
import m2 from './modules/m2'
Vue.use(Vuex)

export default new Store({
  state: {
    count: 0
  },

  mutations: {
    add(state) {
      state.count++
    },

    join(state) {
      state.count += 100
    }
  },

  modules: {
    m1,
    m2
  }
})