import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import product from './modules/products'
import cart from './modules/carts'

import myPlugin from './myPlugin'

Vue.use(Vuex)

const store = new Store({
  // plugins: [myPlugin],
  mutations: {
    'UPDATE_DATA'() {
      store.commit('receiveData', data)
    }
  },
  modules: {
    product,
    cart
  }
})

socket.on('data', data => {
  store.commit('receiveData', data)
})

export default store