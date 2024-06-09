<template>
  <div>
    <button @click="handle1">goto movie</button>
    <button @click="handle2">goto theater</button>
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log('profile')
  },
  destroyed() {
    // console.log('profile')
  },
  methods: {
    handle1() {
      // 编程式导航
      this.$router.push('/movie')
    },
    handle2() {
      // this.$router.push({
      //   path: '/theater/2',
      //   // params: {
      //   //   type: 2
      //   // }
      // })
      // this.$router.push('/theater/2')
      // this.$router.replace('/theater/2')
      this.$router.push({
        name: 'theater',
        params: {
          type: 2
        },
        query: {
          id: 100
        }
      })
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>