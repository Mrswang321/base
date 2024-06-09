<template>
  <div>
    {{count}} {{header}} {{title}}
    <button @click="join('hello')">click</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['count']),
    ...mapState('m1', ['header']),
    ...mapState('m2', ['title'])
    // header() {
    //   return this.$store.state.m1.header
    // },
    // title() {
    //   return this.$store.state.m2.title
    // }
  },

  methods: {
    // doSomething() {
    //   // this.$store.commit('add')
    //   this.$store.commit('join', 'hello')
    //   this.$store.commit('m1/join', 'hello')
    //   this.$store.commit('m2/join', 'hello')
    // }
    ...mapMutations(['join']),
    ...mapMutations('m1', ['join']),
    ...mapMutations('m2', ['join'])
  },

  mounted() {
    // console.log(this.$store)
  },
}
</script>

<style lang='stylus' scoped>

</style>