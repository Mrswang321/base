<template>
  <div>
    <ul>
      <li v-for="product in products">
        {{product.name}} - {{product.price}}
        <button 
          @click="addToCart(product)"
          :disabled="product.inventory === 0"
        >放入购物车</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('product', {
      products: 'all'
    })
  },

  methods: {
    ...mapActions('product', ['loadData']),
    ...mapActions('cart', ['addToCart'])
  },

  mounted() {
    this.loadData()
  }
}
</script>

<style lang='stylus' scoped>

</style>