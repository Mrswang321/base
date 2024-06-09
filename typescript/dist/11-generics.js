// 泛型
// function identity(arg: string): string {
//   return arg
// }
// identity('hello')
// function identity(arg: any): any {
//   return 100
// }
// identity(true)
// function identity<T>(arg: T): T {
//   let x: T
//   return x
// }
// // let output: string = identity<string>('hello')
// // console.log(output)
// // let output2: number = identity<number>(100)
// // console.log(output2)
// let output = identity('hello')
// console.log(output)
// let yy = '100'
// yy = 200
// 泛型变量
// function identity<T>(arg: T[]): T[] {
//   console.log(arg.length)
//   return arg
// }
// let myIdentity: <U>(arg: U[]) => U[] = identity
// 泛型类
// class GenericNumber<T> {
//   zeroValue: T
//   add: (x: T, y: T) => T
// }
// let myGenericNumer = new GenericNumber<number>()
// myGenericNumer.zeroValue = 0
// myGenericNumer.add = (x: number, y: number):number => {
//   return x + y
// }
// myGenericNumer.add(100, 200)
// 泛型约束
// interface Lengthwize {
//   length: number
// }
// function identity<T extends Lengthwize> (arg: T): T {
//   console.log(arg.length)
//   return arg
// }
// identity({
//   x: 100,
//   length: 300
// })
// 在泛型里使用类类型
// function create<T>(c: { new(): T }): T {
//   return new c()
// }
// class BeeKeeper {
//   hasMask: boolean = true
// }
// class ZooKeeper {
//   nametag: string = 'hello'
// }
// class Animal {
//   numLegs: number
// }
// class Bee extends Animal {
//   keeper = new BeeKeeper()
// }
// class Lion extends Animal {
//   keeper = new ZooKeeper()
// }
// function createInstance<A extends Animal> (c: { new(): A }) : A {
//   return new c()
// }
// console.log(createInstance(Lion).keeper.nametag)
// console.log(createInstance(Bee).keeper.hasMask)
