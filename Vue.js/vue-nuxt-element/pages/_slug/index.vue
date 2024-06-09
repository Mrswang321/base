<template>
  <div>
    slut index
  </div>
</template>

<script>
export default {
  validate({params}) {
    console.log(params)
    return params.slug === 'def'
  },

  mounted() {
    console.log(this.$route)
  },
}
</script>

<style lang='stylus' scoped>

</style>