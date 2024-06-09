<template>
  <div class="movie-list">
    <div v-html="mostExpected"></div>
    <MovieList :movie-list="movieList"></MovieList>
  </div>
</template>

<script>
import MovieList from '@/components/MovieList'
export default {
  props: {
    movieList: {
      type: Array
    }
  },

  data() {
    return {
      mostExpected: ''
    }
  },

  components: {
    MovieList
  },

  async mounted() {
    let result = await this.$http.get({
      url: '/ajax/topRatedMovies'
    })
    
    this.mostExpected = result
  },
}
</script>

<style lang="stylus" scoped>
// .movie-list
//   width 100%
//   position absolute
//   top 0
//   z-index 100000
</style>

<style lang='stylus'>
.top-rated
  margin-bottom 0 !important
</style>