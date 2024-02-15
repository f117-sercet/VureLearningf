/**
 * 该文件是项目的引入文件
 */
// 引入Vue
import Vue from 'vue'
// 映入App组件 所有组件的父组件
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue的实例对象
new Vue({
  // 将App组件放入容器中
  el:'#app',
  render: h => h(App),
})
