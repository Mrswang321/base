<template>
  <div>
    {{id}}
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.params.id)
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  }
}
</script>

<style scoped>

</style>