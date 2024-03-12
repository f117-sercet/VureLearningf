// 执行tsc test01.ts 编译生成js
var message:String = "hello,World"
console.log(message)

// 数字类型
let binargLiteral:number =0b101

// 字符串类型
let a:String = "Runnb"

// 布尔
var flag:boolean = true

//声明变量为数组。
let arr:number[] =[1,2]

// 数组泛型
let arrs:Array<number> = [1,2,3]
for (let i = arrs.length - 1; i >= 0; i--) {
    console.log(arrs[i])
}

// 元组:已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。
let x:[String,number]
x =["Runoob",1]
console.log(x.shift())

// 枚举
enum Color {Red, Green, Blue};
let c: Color = Color.Blue;
console.log(c);    // 输出 2

// Any 类型
// 1、任意值是 TypeScript 针对编程时类型不明确的变量使用的一种数据类型，它常用于以下三种情况。
let xs: any = 1;    // 数字类型
xs = 'I am who I am';    // 字符串类型
xs = false;    // 布尔类型
// 2、改写现有代码时，任意值允许在编译时可选择地包含或移除类型检查，示例代码如下：
let x3: any = 4;
x3;    // 正确，ifItExists方法在运行时可能存在，但这里并不会检查
x3.toFixed();    // 正确
// 定义存储各种类型数据的数组时，示例代码如下：
let arrayList: any[] = [1, false, 'fine'];
arrayList[1] = 100;
//never 类型
//never 是其它类型
// （包括 null 和 undefined）的子类型，
// 代表从不会出现的值。
// 这意味着声明为 never 类型的变量只能被 never 类型所赋值，
// 在函数中它通常表现为抛出异常或无法执行到终止点（例如无限循环），示例代码如下：
let x4 :never;
let y:never;
// 编译错误，数字类型不能转为 never 类型
//x4 = 123;
// 运行正确，never 类型可以赋值给 never类型
x4 =(()=>{throw new Error('Exception')})();
// 运行正确，never 类型可以赋值给 数字类型
y=(()=>{ throw new Error('exception')})();
// 返回值为 never 的函数可以是抛出异常的情况
function error(message: string): never {
    throw new Error(message);
}

// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop(): never {
    while (true) {}
}
