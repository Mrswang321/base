export { }
let secondName: number = 10


var names = ['a', 'b', 'c'];
//没有定义显示类型  ts也会用foreach函数的类型以及 数组的字符串类型推断出s的类型 
//上下文类型
names.forEach(function (s) {
  console.log(s.toLocaleUpperCase());
});
// object不包含基础类型
// Object 包含基础类型 
var obj1: Object = { m: 1 };
var arr1: Object = [2, 3];
var num: Object = 2;
var str1: Object = "str";
var bool: Object = false;


// {}==Object
let obj2: {} = { m: 2 }
var arr2: {} = [2, 3];
var num2: {} = 2;
var str2: {} = "str";
var boo2: {} = false;
console.log(arr2 == arr1);


let arr3: number[] = [1, 2, 3, 4]
let strArr: string[] = ['2', '3']

