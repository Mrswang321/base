<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <div @click="handle1(), handle2()">{{title}}</div>
    <ul>
      <template v-if="show">
        <li v-for="li in list">
          {{li}}
        </li>
      </template>
    </ul>
    <!-- <table border="1">
      <blog></blog>
    </table> -->
    <!-- <ul>
      <li v-is="'blog'"></li>
    </ul> -->
    <ul>
      <Blog class="abc" v-model:desc.capitalize="myText"></Blog>
    </ul>
    <div>
      {{myText}}
    </div>
    <Child></Child>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Blog from '@/views/blog-post-row.vue'
import Child from '@/views/Child.vue'

export default defineComponent({
  // inject: ['hometitle'],
  data() {
    return {
      title: 'hello',
      show: true,
      myText: 'helloWorld',
      list: [
        'aaa',
        'bbb',
        'ccc'
      ]
    }
  },
  provide: {
    title: 'abc'
  },
  // provide() {
  //   return {
  //     title: this.title
  //   }
  // },
  name: 'Home',
  components: {
    HelloWorld,
    Blog,
    Child
  },
  // unmounted() {
  //   console.log('unmounted')
  // },

  methods: {
    handle1() {
      console.log('handle1')
    },
    handle2() {
      console.log('handle2')
    }
  },

  mounted() {
    // console.log('home', this.hometitle)
  }
});
</script>
