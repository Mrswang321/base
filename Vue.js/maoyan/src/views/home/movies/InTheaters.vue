<template>
  <div class="movie-list">
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

  components: {
    MovieList
  },
}
</script>

<style lang="stylus" scoped>
// .movie-list
//   width 100%
//   position absolute
//   top 0
//   z-index 10000
</style>