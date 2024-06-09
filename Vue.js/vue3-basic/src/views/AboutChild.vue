<template>
  <div ref="myRef">
    about child
    <slot name="s1"></slot>
  </div>
</template>

<script>
import { inject, onMounted, ref } from 'vue'
export default {
  // props: ['title'],

  setup(props, context) {
    const myRef = ref(null)
    // console.log(context.attrs.title)
    // console.log(context.attrs.abc)
    // console.log(context.slots.default())
    // context.emit('myClick', 'clicked.')
    // console.log(inject('test').value)

    onMounted(() => {
      console.log(myRef.value)
    })

    return {
      myRef
    }

  }
}
</script>

<style lang='stylus' scoped>

</style>