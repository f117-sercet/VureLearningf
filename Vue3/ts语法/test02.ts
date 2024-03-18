

// 常量
let a:'你好'
let b: 100 //b的值只能为数字100
let gender: '男'|'⼥' //定义⼀个gender变量，值只能为字符串“男”或“⼥”
 gender = '男'
//gender = '未知' //不能将类型“"未知"”分配给类型“"男" | "⼥"”

// 对象
 let obj:Object
obj = {}
obj = {name:'张三'}
obj = [1,3,5,7,9]
obj = function(){}
obj = 1
// 1不是Object的实例对象，但其包装对象是Object的实例
 obj = true // truue不是Object的实例对象，但其包装对象是Object的实例
 obj = '你好' // “你好”不是Object的实例对象，但其包装对象是Object的实例
// 以下代码均有警告 a = null
// 警告：不能将类型“null”分配给类型“Object”
obj = undefined // 警告：不能将类型“undefined”分配给类型“Object”


// 限制函数返回值
let demo:(a:number,b:number)=>number
     demo=function (x,y){
     return x+y
}
// tuple
let t:[String,number]
t =['hello',123]

//enum
enum Color{
 Red,
 Blue
}

// 抽象类
class Person {
 name: string
 age: number
 constructor(name:string,age:number){ this.name = name
  this.age = age
}
}
class Teacher extends Person{}

// 抽象
abstract class Persons{}

class Teachers extends Persons{

 // 构造器
 constructor() {
  super();
 }
}

 //Person接⼝
interface Person {
 // 属性声明
  name: string
  age: number
 // ⽅法声明
 speak():void
}

// Teacher实现Person接⼝
class Teacher4 implements Person {
 name: string
 age: number
 // 构造器
 constructor(name: string,age: number) {
  this.name = name
  this.age = age}
// ⽅法
 speak(){ console.log('你好！我是⽼师:',this.name)
}
}
// 泛型
//定义⼀个函数或类时，有些情况下⽆法确定其中要使⽤的具体类型（返回值、参数、属性的类型不能确 定），此时就需要泛型了
//举例： <T> 就是泛型，（不⼀定⾮叫 T ），设置泛型后即可在函数中使⽤ T 来表示该类型：
function test<T>(arg: T): T{ return arg;
}
// 不指名类型，TS会⾃动推断出来
 test(10)
// 指名具体的类型
test<number>(10)
