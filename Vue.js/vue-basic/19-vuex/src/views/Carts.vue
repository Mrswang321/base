<template>
  <div>
    <ul>
      <li v-for="product in products">
        {{product.name}}: {{product.quantity}} x {{product.price}} = {{product.quantity * product.price}}
      </li>
    </ul>
    <div>总价： {{totalPrice}}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState('cart', {
      products: 'items'
    }),
    ...mapGetters('cart', ['totalPrice'])
  }
}
</script>

<style lang='stylus' scoped>

</style>