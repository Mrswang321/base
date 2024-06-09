function greet(name: String) {
  console.log('hello ,' + name + '!!!')
}
greet('42')
//返回值类型
function getFun(): Number {
  return 10
}
const names = ['a', 'b', 'c']
//没有定义显示类型  ts也会用foreach函数的类型以及 数组的字符串类型推断出s的类型 
//上下文类型
names.forEach(function (s) {
  console.log(s.toLocaleUpperCase())
})
export {

}
// object不包含基础类型


// Object 包含基础类型 
let obj1: Object = { m: 1 }
let arr1: Object = [2, 3]
let num: Object = 2
let str1: Object = "str"
let bool: Object = false


let obj2: {} = { m: 2 }
