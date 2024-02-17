<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom">点我展示dom</button>
    <HelloWorld msg="Welcome to Your Vue.js App" ref="sch"/>
  </div>
</template>

<!-------
  ref 属性
  1.被用来给元素或子组件注册引用信息
  2.应用在html标签上获取的是真实Dom元素，应用在组件标签上是组件实例对象


---------->
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      msg:'你好'
    }
  },
  methods:{
    showDom(){
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
