export default {
  namespaced: true,
  
  state() {
    return {
      title: 'x'
    }
  },

  mutations: {
    join(state, str) {
      console.log('m2')
      state.title += str
    }
  }
}