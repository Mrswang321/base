<template>
  <!-- <tr>
   <td>abc</td> 
   <td>abc</td>
  </tr> -->
  <!-- <li v-bind="$attrs">
    aaa
  </li>
  <li>
    bbb
  </li> -->
  <!-- <form submit="handleSubmit" action="http://www.baidu.com">
    <button @click="submitForm">submit</button>
  </form> -->
  <input type="text" 
    :value="desc"
    @input="emitValue">
    <!-- {{modelValue}} -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // inject: ['hometitle'],
  props: {
    modelValue: String,
    desc: String,
    descModifiers: {
      default: (): any => {
        return {}
      }
    }
  },
  emits: {
    // 没有验证
    click: null,

    // 验证submit 事件
    submit: ({ email, password }) => {
      if (email && password) {
        return true
      } else {
        console.warn('Invalid submit event payload!')
        return false
      }
    },
    'update:modelValue': null,
    'update:desc': null
  },
  methods: {
    submitForm() {
      this.$emit('submit', { email: 'abc@abc.com', password: '123' })
    },

    handleSubmit() {
      // console.log('submit')
      this.$emit('update:modelValue', 'abc')
    },

    emitValue(e) {
      let value = e.target.value
      if (this.descModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      console.log(value)
      this.$emit('update:desc', value)
    }
  },
  created() {
    // console.log(this.modelModifiers) // { capitalize: true }
    // console.log(this.hometitle)
  }
})
</script>

<style lang='stylus' scoped>

</style>