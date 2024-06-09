const state = () => {
  return {
    items: []
  }
}

const getters = {
  totalPrice(state) {
    return state.items.reduce((total, product) => {
      total += product.quantity * product.price
      return total
    }, 0)
  }
}

const mutations = {
  setItems(state, product) {
    let {id, name, price} = product
    let result = state.items.find(v => v.id === id)
    if (result) {
      result.quantity++
    } else {
      state.items.push({
        id,
        name,
        price,
        quantity: 1
      })
    }
  }
}

const actions = {
  addToCart({commit, dispatch, state}, product) {
    dispatch('product/decrementInventory', product.id, {root: true})
    commit('setItems', product)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}