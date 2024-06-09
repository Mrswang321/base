<template>
  <div>
    <div v-if="loadding">lodding...</div>
    <p v-else>
      <ul>
        <router-link tag="li" to="/theater/1">1</router-link>
        <router-link tag="li" to="/theater/2">2</router-link>
        <router-link tag="li" to="/theater/3">3</router-link>
        <router-link tag="li" to="/theater/4">4</router-link>
        <router-link tag="li" to="/theater/5">5</router-link>
        <router-link tag="li" to="/theater/6">6</router-link>
      </ul>
      <div>{{abc}} - {{type}}</div>
      <button @click="handleClick">goto movies</button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadding: false
    }
  },
  props: ['type', 'abc'],
  methods: {
    handleClick() {
      this.$router.push('/movie')
    }
  },

  computed: {
    // id() {
    //   return this.$route.params.type
    // }
  },

  beforeRouteEnter(to, from, next) {
    setTimeout(() => {
      let data = false
      next((vm) => {
        vm.loadding = data
      })
    }, 2000)
  },

  beforeRouteUpdate() {
    console.log('beforeRouteUpdate')
  },

  beforeRouteLeave (to, from, next) {
    console.log('beforeRouteLeave')
    if (confirm('你真的要离开吗？')) {
      next()
    }
  },

  mounted() {
    // console.log(this.$route.query.id)
    // console.log(0)
    this.loadding = true
    setTimeout(() => {
      this.loadding = false
    }, 2000)
  },

  // watch: {
  //   $route() {
  //     console.log(1)
  //   }
  // }
}
</script>

<style scoped>
li {
  display: inline-block;
  width: 30px;
}
</style>