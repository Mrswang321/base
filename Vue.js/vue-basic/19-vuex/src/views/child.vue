<template>
  <div>
    child: {{count}} {{myComputed(1000)}}
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      num: 300
    }
  },
  computed: {
    ...mapState({
      count(state) {
        return state.count + this.num
      }
    }),
    // ...mapGetters(['myComputed'])
    ...mapGetters({
      myComputed: 'myComputed'
    })
  }
}
</script>

<style lang='stylus' scoped>

</style>