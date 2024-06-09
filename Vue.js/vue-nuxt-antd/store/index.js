export default {
  state() {
    return {
      count: 0
    }
  },

  mutations: {
    add(state) {
      state.count++
    }
  },

  actions: {
    add({commit}) {
      commit('add')
    }
  }
}