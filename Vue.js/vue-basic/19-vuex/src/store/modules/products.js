const state = () => {
  return {
    all: []
  }
}

const mutations = {
  setAll(state, all) {
    state.all = all
  },

  setProductInventory(state, id) {
    let product = state.all.find(v => v.id === id)
    if (product) {
      product.inventory--
    }
  }
}

const actions = {
  loadData({commit}) {
    fetch('/products.json')
      .then(response => response.json())
      .then(result => {
        commit('setAll', result.data)
      })
  },

  decrementInventory({commit}, id) {
    commit('setProductInventory', id)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}