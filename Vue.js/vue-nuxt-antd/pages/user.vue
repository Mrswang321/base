<template>
  <div>
    <ul>
      <li><nuxt-link to="/user">index</nuxt-link></li>
      <li><nuxt-link to="/user/100">id</nuxt-link></li>
    </ul>
    <nuxt-child/>
  </div>
</template>

<script>
export default {
  layout: 'blog'
}
</script>

<style lang='stylus' scoped>

</style>