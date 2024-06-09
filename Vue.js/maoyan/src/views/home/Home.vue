<template>
  <div class="home-wrap">
    <header>猫眼电影</header>
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <router-view></router-view>
    </transition>
    <nav class="tabbar">
      <van-tabbar
        v-model="active"
        active-color="#cd4c42"
        inactive-color="#666"
        route
      >
        <van-tabbar-item to="/home/movies/intheaters">
          <span>电影</span>
          <template #icon="props">
            <van-icon class-prefix="iconfont-nav" name="movie" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item to="/home/theaters">
          <span>影院</span>
          <template #icon="props">
            <van-icon class-prefix="iconfont-nav" name="theater" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item to="/home/profile">
          <span>我的</span>
          <template #icon="props">
            <van-icon class-prefix="iconfont-nav" name="profile" />
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </nav>
  </div>
</template>

<script>
import Vue from 'vue'
import { Icon, Tabbar, TabbarItem } from 'vant'
import Movies from '@/views/home/movies/Movies'

Vue.use(Icon).use(Tabbar).use(TabbarItem)

export default {
  data() {
    return {
      active: 0
    }
  },

  components: {
    Movies
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/stylus/icon.styl"
.home-wrap
  position relative
  display flex
  flex-direction column
  height 100%
  header
    background #cd4c42
    color #FFF
    height .44rem
    font-size .16rem
    font-weight bold
    text-align center
    line-height .44rem
    &::before
      content '\e8ae'
      font-family iconfont-nav
    &::after
      content '\e8ae'
      font-family iconfont-nav
      
  .tabbar
    height .44rem
    z-index 10000
</style>

<style lang="stylus">
html 
  font-size 100px
</style>