<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AboutChild title="hello" abc="aabbcc" @myClick="handleMyClick">
      <template v-slot:s1="data">
        <div>
          abc
        </div>
      </template>
    </AboutChild>
    {{title}} {{data.msg}} {{title2}}
  </div>
</template>

<script>
import AboutChild from './AboutChild'
import { onMounted, reactive, ref, watch, watchEffect, computed, provide } from 'vue'
export default {
  components: {
    AboutChild
  },

  setup() {
    let title = ref('hello')
    let data = reactive({
      msg: 'haha'
    })

    provide('test', title)

    onMounted(() => {
      // console.log(title.value)
      setTimeout(() => {
        title.value = 'world'
      }, 2000)
    })

    const handleMyClick = (msg) => {
      console.log(msg)
    }

    watchEffect(() => {
      // console.log(title.value)
    })

    watch(title, () => {
      console.log(title.value)
    })

    let title2 = computed(() => {
      return title.value + '!!!!'
    })

    return {
      title,
      data,
      title2,
      handleMyClick
    }
  }

  // mounted() {
  //   console.log(this.$translater('greetings.hi'))
  // },
}
</script>
