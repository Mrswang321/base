import Vue from 'vue'
import Vuex, { Store } from 'vuex'
Vue.use(Vuex)

export default new Store({
  state: {
    city: {
      name: '北京',
      id: 1
    }
  },

  mutations: {
    setCity(state, city) {
      state.city = city
    }
  },

  actions: {
    changeCity({commit}, city) {
      commit('setCity', city)
    }
  }
})