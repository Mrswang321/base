<template>
  <div id="app">
    <ul>
      <router-link active-class="active" tag="li" :to="{path: '/movie'}">电影</router-link>
      <router-link active-class="active" tag="li" to="/theater">影院</router-link>
      <router-link active-class="active" tag="li" to="/profile">我的</router-link>
      <router-link active-class="active" tag="li" to="/o">命名视图</router-link>
    </ul>
    <router-view></router-view>
    <router-view name="v2"></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log(this.$route)
  },
  watch: {
    $route: {
      handler(value) {
        if(value.path === '/theater' && !value.params.type) {
          this.$router.push({
            name: 'theater',
            params: {
              type: 1
            }
          })
        }
      },
      immediate: true
    }
  }
}
</script>

<style>
.active {
  font-size: 20px;
  color: red;
}
</style>
