<template>
  <h1>child2</h1>
  <!-- <component :is="componentId"></component> -->
  <button @click="changeId">click</button>

  <Suspense fallback="Loading">
    <AsyncComp />
  </Suspense>
</template>

<script>
import AsyncComp from '@/components/AsyncComponent.js'
import SyncComp from '@/components/SyncComponent.vue'
import Loading from '@/components/Loading'
export default {
  // inject: ['title'],
  // mounted() {
  //   // console.log(this.title.value)
  // }
  data() {
    return {
      componentId: SyncComp
    }
  },

  methods: {
    changeId() {
      this.componentId = AsyncComp
    }
  },

  components: {
    Loading
  }
}
</script>

<style lang='stylus' scoped>

</style>