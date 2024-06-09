import Vue from 'vue'
import Vuex, { Store } from 'vuex'
Vue.use(Vuex)

import { DECREMENT } from './actiontypes'
import { ADD, MINUS } from './mutationtypes'

const store = new Store({
  // 状态
  state: {
    count: 0
  },

  // getters: store里的计算属性
  getters: {
    // myComputed(state) {
    //   return state.count * 100
    // }
    myComputed: function(state) {
      return (num) => {
        return state.count + num
      }
    }
  },

  // mutations
  mutations: {
    [ADD](state, num) {
      // step3: mutate
      state.count += num
    },
    [MINUS](state, num) {
      // 可以在mutations里做异步操作，但是千万不要在这里做
      // setTimeout(() => {
      //   state.count -= 100
      // }, 1000)
      state.count -= num
    },
    multi(state) {
      state.count *= state.count
    }
  },

  // actions
  actions: {
    increment({commit}, num) {
      // step2: commit
      commit(ADD, num)
    },
    [DECREMENT]({commit}, num) {
      // setTimeout(() => {
        commit(MINUS, num)
      // }, 1000)
    },

    async doubleCount({commit, dispatch}) {
      let result = new Promise((resolve) => {
        setTimeout(() => {
          commit('multi')
          resolve(200)
        }, 2000)
      })
      dispatch(DECREMENT, await result)
    }
  }
})

export default store