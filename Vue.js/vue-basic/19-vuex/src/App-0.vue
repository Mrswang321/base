<template>
<div>
  <div>
    <button @click="decrement">-</button>
    {{count}}
    <button @click="add(40)">+</button>
  </div>
  <child></child>
</div>

</template>

<script>
import child from './views/child'
import { mapState, mapGetters, mapMutations } from 'vuex'
import { DECREMENT } from './store/actiontypes'
import { ADD } from './store/mutationtypes'
export default {
  components: {
    child
  },

  mounted() {
    // console.log(this.$store.state.count)
  },

  // computed: {
  //   count() {
  //     return this.$store.state.count
  //   }
  // },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['myComputed'])
  },

  // methods: {
  //   ...mapMutations(['add', 'minus'])
  // }

  methods: {
    increment() {
      // step1: dispatch
      // this.$store.dispatch('increment', 20)
      // this.$store.commit('add', 20)
      this.$store.commit({
        type: ADD,
        num: 20
      })
    },

    ...mapMutations({
      add() {
        this.$store.commit(ADD, 20)
      }
    }),

    async decrement() {
      this.$store.dispatch('doubleCount')
      // this.$store.dispatch(DECREMENT, num)
    }
  },
}
</script>

<style lang='stylus' scoped>

</style>