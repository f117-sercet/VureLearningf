<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <School/>
    <Student/>
  </div>
</template>


<!------
全局事件总线

一种组件间通信的方式,适用于任意组件间的通行
2.全局安装总线:
new Vue({

..........
    beforeCreate(){

        Vue.prototype.$bus = this

    }

})

  3.使用事件总线：
    1.接收数据：A组件接收数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A中。

        methods(){

          demo(data){......}
        }

        .............
        mounted(){

        this.$bus.$on('xxx',this.demo)
        }

     2.提供数据： this.$bus.$emit('xxx',数据)

  4.最好在beforeDestroy钩子中，用$off 去解除当前组件所用到的事件。

------->

<script>
import Student from './components/Student'
import School from './components/School'

export default {
  name: 'App',
  components: {School, Student},
  data() {
    return {
      msg: '你好啊！',

    }
  },
}
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
