<template>
  <ul>
    <li
      v-for="mv in movieList"
    >
      <div>
        <img :src="mv.img | wh('192.270')" :alt="mv.nm">
      </div>
      <div>
        <h1>{{mv.nm}} <MovieVersion v-if="mv.ver" :ver="mv.ver" /></h1>
        <p>{{mv.cat}}</p>
        <p>{{mv.desc}}</p>
        <div>{{mv.showInfo}}</div>
      </div>
      <MovieButton :mv="mv" />
    </li>
  </ul>
</template>

<script>
import MovieVersion from './MovieVersion'
import MovieButton from './MovieButton'

export default {
  props: {
    movieList: {
      type: Array,
      required: true
    }
  },

  components: {
    MovieButton,
    MovieVersion
  }
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/stylus/border.styl'
@import '~@/assets/stylus/ellipsis.styl'

ul
  padding-left .12rem
  li
    height 1.14rem
    display flex
    padding .12rem .12rem .12rem 0
    border1px(0 0 1px 0)
    > div:first-child
      width .76rem
      img
        width .64rem
        height .9rem

    > div:nth-child(2)
      flex 1
      h1
        display flex
        align-items center
        font-size .16rem
        font-weight 100
        ellipsis()
        
      > p
        line-height .22rem
        color #666
        ellipsis()
          
      div
        line-height .22rem
        color #999
        ellipsis()

    &:last-child
      border1px(0)
</style>