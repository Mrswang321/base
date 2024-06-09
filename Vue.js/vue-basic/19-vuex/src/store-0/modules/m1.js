const state = () => {
  return {
    header: 'y'
  }
}

const mutations = {
  join(state, str) {
    console.log('m1')
    state.header += str
  }
}

export default {
  namespaced: true,
  state,
  mutations
}