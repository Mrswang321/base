<template>
<section id="city-list" class="city-list-container">
  <van-index-bar :sticky="false" :index-list="indexList">
    <section>
      <van-index-anchor index="定位">定位城市</van-index-anchor>
      <div class="city-list city-list-inline clearfix">
        <div class="location-city">定位失败，请点击重试</div>
      </div>
    </section>

    <section class="history-city-list">
      <van-index-anchor index="最近">最近访问城市</van-index-anchor>
      <div class="city-list city-list-inline clearfix">
        <div @click="pickCity({name:'阿拉善盟', id: 58})" class="city-item">阿拉善盟</div>
        <div @click="pickCity({name:'鞍山', id: 63})" class="city-item">鞍山</div>
      </div>
    </section>

    <section>
      <van-index-anchor index="热门">热门城市</van-index-anchor>
      <div class="city-list city-list-inline clearfix">
        <div class="city-item"
          v-for="hot in cityData.hotCities"
          @click="pickCity(hot)"
        >{{hot.name}}</div>
      </div>
    </section>

    <section>
      <template v-for="(cities, key) in cityData.cities">
        <van-index-anchor :index="key">{{key}}</van-index-anchor>
        <div class="city-list city-list-block clearfix">
          <div @click="pickCity(ci)" class="city-item" v-for="ci in cities">{{ci.name}}</div>
        </div>
      </template>
    </section>
  </van-index-bar>
</section>
</template>

<script>
import Vue from 'vue'
import { IndexBar, IndexAnchor } from 'vant'

import { mapActions } from 'vuex'

Vue.use(IndexBar)
Vue.use(IndexAnchor)

export default {
  data() {
    return {
      indexList: ['定位', '最近', '热门'],
      cityData: {}
    }
  },

  async mounted() {
    let result = await this.$http.get({
      url: '/cities.json'
    })
    this.cityData = result


    this.indexList = [
      ...this.indexList,
      ...Object.keys(result.cities)
    ]
  },

  methods: {
    pickCity(city) {
      this.changeCity(city)
      this.$router.back()
    },
    ...mapActions(['changeCity'])
  },
}
</script>

<style lang='stylus' scoped>

</style>