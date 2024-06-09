<template>
  <div>
    <div>
      <input type="text" v-model="keywords" @keyup.enter="handleKeyup">
      <button @click="handleGotoClick">goto about page</button>
    </div>
    <ul>
      <li v-for="(li, i) in list">
        {{li}} <button @click="handleClick(i)">x</button>
      </li>
    </ul>
    <div>
      {{count}} <button @click="changeCount">+</button>
    </div>
  </div>
</template>

<script>
import useInit from './useInit'
import useList from './useList'
import useGoto from './useGoto'
import useVuex from './useVuex'

export default {
  setup() {
    const { list } = useInit()
    const { keywords, handleKeyup, handleClick } = useList(list)
    const { handleGotoClick } = useGoto()
    const { count, changeCount } = useVuex()

    return {
      keywords,
      list,
      handleKeyup,
      handleClick,
      handleGotoClick,
      count,
      changeCount
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>