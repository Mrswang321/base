// export default {
//   // plugins: [MyPlugin],

//   state() {
//     return {
//       count: 100
//     }
//   },

//   mutations: {
//     add(state) {
//       state.count++
//     }
//   },

//   actions: {
//     add({commit}) {
//       console.log('m1')
//       commit('add')
//     }
//   }
// }

// export const plugins = [MyPlugins]

export const state = () => {
  return {
    count: 100
  }
}

export const mutations = {
  add(state) {
    state.count++
  }
}

export const actions =  {
  add({commit}) {
    console.log('m1')
    commit('add')
  }
}