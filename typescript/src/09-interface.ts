// 对象的形状
// function foo(x: { label: string }) {
//   console.log(x.label);
// }

// let f = { y: 100, label: 'abc' }
// foo(f)

// interface Label {
//   label: string
// }

// function foo(label: Label) {
//   console.log(label);
// }

// foo({
//   label: 'abc',
//   xxx: 'hello'
// })

// 1、可选属性
// interface SquareConfig {
//   color: string,
//   width?: number,
//   [propName: string]: any // 属性签名
// }

// function createSquare(config: SquareConfig) {
//   console.log(config);
// }

// createSquare({
//   color: 'red',
//   height: 200
// })

// 2、函数类型
// interface SearchFun {
//   (source: string, subString: string): boolean
// }

// let mySearch: SearchFun = (source: string, subString: string): boolean => {
//   return true
// }

// 3、可索引的类型
// interface StringArray {
//   [index: number]: string
// }

// let myArray: StringArray = ['a', 'b']
// let myStr: string = myArray[0]
// console.log(myStr)

// class Animal {
//   name: string
// }

// class Dog extends Animal {
//   breed: string
// }

// interface NotOk {
//   [x: number]: Animal
//   [x: string]: Dog
// }

// interface NumberDict {
//   [index: string]: number
//   length: number
// }

// let myObj: NumberDict = {
//   abc: 100,
//   length: 100
// }

// 4、类类型
// interface IClock {
//   currentTime: Date
// }

// class Clock implements IClock {
//   currentTime: Date
// }

// 5、继承接口
// interface Shape {
//   color: string
// }

// interface Material {
//   type: string
// }

// interface Square extends Shape, Material  {
//   length: number
// }

// let square: Square = {
//   color: 'red',
//   length: 100,
//   type: 'abc'
// }

// 6、混合类型
// interface Counter {
//   foo(start: number): string
//   interval: number
//   reset(): void
// }

// function getCounter(): Counter {
//   // let counter = function(start: number) {}
//   // counter.interval = 123
//   // counter.reset = function() {}
//   return {
//     foo: function(start: number) { return '' },
//     interval: 100,
//     reset: function() {}
//   }
// }

// 7、接口继承类
// class Control {
//   state: any
// }

// class Control2 {
//   data: any
// }
 
// interface sControl extends Control, Control2 {
//   select(): void
// }

// let sc: sControl = {
//   state: 'abc',
//   select: () => {},
//   data: 'abc'
// }