
<!-----
  标准组件结构
  <template>
  // 组件结构
  </template>
  <script>
  1.组件交互的代码
  </script>

  <style>
  组件样式
  </style>
--------->
<template>
  <div class="demo">
    <h2>学校地址:{{schoolName}}</h2>
  </div>
  <div>学校地址:{{address}}
  <button @click="showName">点我点击提示学校名</button>
  </div>
</template>
<script>
// 暴露方式
//1.分别暴露
export const school= Vue.extend({
  name:'School',
  data(){
    return{
      schoolName:'123',
      address:'你拿捏',
    }
  }
})
// 同意暴露
export {school}
//默认暴露
export default school
</script>
<style>

</style>
