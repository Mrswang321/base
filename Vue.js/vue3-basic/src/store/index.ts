import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    setCount(state) {
      state.count++
    }
  },
  actions: {
    add({ commit }) {
      commit('setCount')
    }
  },
  modules: {
  }
})
