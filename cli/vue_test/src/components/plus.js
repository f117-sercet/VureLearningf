// 插件
import {executeOnVue} from "eslint-plugin-vue/lib/utils";

export default{
    install(Vue){
        console.log('@@@install',Vue)

        // 全局过滤器
        Vue.filter('mySlice',function (value){
            return value.slice(0,4)
        })
        // 定义全局指令
        Vue.directive('fbind',{})

        // 定义混入
        Vue.mixin({
            data:{
                x:100,
                y:100
            }
        })

        // 给Vue原型上添加一个方法(vm和vc都能用)
        Vue.prototype.hello=()=>{alert('你好')}
    }
}
