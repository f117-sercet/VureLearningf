<template>
  <div id="app">
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import obj from './components/plus'
import Headers from "@/components/Headers.vue";
import Footers from "@/components/Footers.vue";
import Item from "@/components/Item.vue";
import List from "@/components/List.vue";

export default {
  name: 'App',
  components: {
    Headers,
    Footers,
    Item,
    List
  },
  data() {
    return {
      msg: '你好'
    }
  },
  methods: {
    showDom() {
      this.$refs.title // 真实dom元素
      this.$refs.sch // 组件VC
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
