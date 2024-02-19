<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom">点我展示dom</button>
    <HelloWorld
        name="123"
        age="18"
        sex="女"
        msg="Welcome to Your Vue.js App" ref="sch"/>
  </div>
</template>

<!-------
 插件
 功能:用于增强 Vue
 本质:包含 install 方法的一个对象，install的第一个参数Vue,第二个以后的参数是插件使用者传递大的数据。
  定义插件：
  obj(这里指得是对象)
  obj.install = function(Vue,options){

    // 1.添加全局过滤器
    Vue.filter(...)

  // 2.添加全局指令
  Vue.directive(...)

  // 3.配置全局混入
  Vue.mixin(....)

  // 4.添加实例方法
   Vue.prototype.&myMethod = function(){...}
   Vue.prototype.&myProperty = xxx
  }
  使用插件：Vue.use()

---------->
<script>

import HelloWorld from './components/HelloWorld.vue'
import obj from './components/plus'

export default {
  name: 'App',
  components: {
    HelloWorld
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
