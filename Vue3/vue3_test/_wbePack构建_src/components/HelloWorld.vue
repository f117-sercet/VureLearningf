<template>
  <div class="hello">
    <h2>姓名:{{name}}</h2>
    <h2>工作种类:{{job.type}}</h2>
  </div>
</template>

<script>
import {h, ref} from "vue";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  //组件中所用的到的:数据、方法等等，均要配置在setup中
  setup(){
    // 引用对象
  let name =ref('张三')
  let age =  ref(18)
  let job = ref({
        type:'前端工程师',
        salary:'50k'
  })

    // 方法
    function sayHello(){
    name.value = '里斯'
    age.value =20
      job.value.type='Ui'
    alert(`我叫${this.name},你好啊`)
    }
   // 返回一个渲染函数
   // return  ()=>h('h1','尚硅谷')
    return{
      name,
      age,
      job
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
