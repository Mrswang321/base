<template>
  <div>
    <!-- <div>{{movies}}</div> -->
    <div>{{$store.state.count}}</div>
    <div @click="handleClick">+</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      title: 'hello',
      // movies: []
    }
  },
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    // return axios.get('https://wx.maoyan.com/mmdb/movie/list/info.json?ci=1&movieIds=1298938%2C1299372%2C1199007%2C1048268%2C1299124%2C1300936%2C1197077%2C1355793%2C1211382%2C1336183').then(result => {
    //   return {
    //     movies: result.data.data.movies
    //   }
    //   // callback(null, {
    //   //   movies: result.data.data.movies
    //   // })
    // })
    let result = await axios.get('https://wx.maoyan.com/mmdb/movie/list/info.json?ci=1&movieIds=1298938%2C1299372%2C1199007%2C1048268%2C1299124%2C1300936%2C1197077%2C1355793%2C1211382%2C1336183')
    return {
      movies: result.data.data.movies
    }
      // let { data } = await axios.get(`https://my-api/posts/${params.id}`)
      // return { title: 'abc' }
  },

  fetch({ store, params }) {
    setTimeout(() => {
      return {
        count: 900
      }
    }, 2000)
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  },
  methods: {
    handleClick() {
      this.$store.dispatch('m1/add')
    }
  }
}
</script>

<style scoped>

</style>