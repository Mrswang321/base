<template>
  <div>
    <h1>产品列表</h1>
    <hr>
    <products></products>
    <h1>购物车</h1>
    <hr>
    <carts></carts>
  </div>
</template>

<script>
import Products from './views/Products'
import Carts from './views/Carts'
export default {
  components: {
    Products,
    Carts
  }
}
</script>

<style lang='stylus' scoped>

</style>