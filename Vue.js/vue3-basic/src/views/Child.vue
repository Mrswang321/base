<template>
  <div>
    <child1 title="xyz"></child1>
    <child2></child2>
  </div>
</template>

<script>
import Child1 from './Child1'
import Child2 from './Child2'
import { computed } from 'vue'
export default {
  data() {
    return {
      title: 'aaa',
      show: false
    }
  },
  components: {
    Child1,
    Child2
  },
  // provide() {
  //   return {
  //     title: computed(() => this.title)
  //   }
  // },
  mounted() {
    setTimeout(() => {
      // this.title = 'bbb'
    }, 3000)
  },
}
</script>

<style lang='stylus' scoped>

</style>