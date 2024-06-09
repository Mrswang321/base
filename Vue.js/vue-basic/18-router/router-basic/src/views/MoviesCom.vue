<template>
  <div>
    <ul>
      <router-link active-class="active" tag="li" to="/movie/com/benshan">本山</router-link>
      <router-link active-class="active" tag="li" to="/movie/com/dandan">丹丹</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang='stylus' scoped>

</style>