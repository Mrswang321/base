// const myBooks = ['a', 'b']
// myBooks.forEach((value: string, index) => {
//   console.log(value)
// })
// type foo = (x: string, y: number) => string
// 函数的类型
// interface Foo {
//   (x: string, y: number): string
// }
// let f: Foo = (x: string, y: number) => {
//   return x + y
// }
// f('abc', 100)
// 可选参数和默认值
// function foo(name: string = 'felixlu', id: number, age?: number) {
//   console.log(name)
// }
// foo('abc', 100, 10)
// 剩余参数
// function push(arr, ...rest) {
//   console.log(arr)
//   console.log(rest)
// }
// let a = []
// push(a, 1, 2, 3)
// 重载
// function add(x: string, y: string): string;
// function add(x: number, y: number): number;
// function add(x: string | number, y: string | number): string | number {
//   if (typeof x === 'string') {
//     return x.toString()
//   }
//   return x
// }
