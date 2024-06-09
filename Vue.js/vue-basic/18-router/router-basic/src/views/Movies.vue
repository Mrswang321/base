<template>
  <div>
    <router-link tag="li" to="/movie/ent">娱乐</router-link>
    <router-link tag="li" to="/movie/com">喜剧</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log(this.$route)
    // console.log('movie')
  },
  destroyed() {
    // console.log('movie')
  },
}
</script>

<style lang='stylus' scoped>

</style>