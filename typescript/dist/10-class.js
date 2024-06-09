// class Greeter {
//   // 静态属性
//   static cname: string = 'Greater'
//   //成员属性
//   greeting: string
//   // 构造函数
//   constructor(message: string) {
//     this.greeting = message
//   }
//   // 静态方法
//   static getClassName() {
//     return 'Class name is Greeter'
//   }
//   // 成员方法
//   greet() {
//     return 'hello' + this.greeting
//   }
// }
// let greeter = new Greeter('world')
// console.log(greeter.greeting)
// console.log(greeter.greet())
// console.log(Greeter.cname)
// console.log(Greeter.getClassName())
// 1、访问器
// let password = 'hello ts'
// class Employee {
//   constructor(private _fullName: string) {
//     this._fullName = _fullName
//   }
//   get fullName(): string {
//     return this._fullName
//   }
//   set fullName(_fullName) {
//     this._fullName = _fullName
//   }
// }
// let employee = new Employee('felix lu')
// employee.fullName = 'yanping xu'
// console.log(employee.fullName)
// 2、类的继承
// class Animal {
//   constructor(public name: string) {
//     this.name = name
//   }
//   move(dis: number = 0) {
//     console.log(`${this.name} moved ${dis}m.`)
//   }
// }
// class Snake extends Animal {
//   constructor(name: string) {
//     super(name)
//   }
//   move(dis: number = 5) {
//     super.move(dis)
//   }
// }
// let sam = new Snake('sammy the python')
// sam.move()
// 3.私有字段
// class Person {
//   #name: string
//   constructor(name: string) {
//     this.#name = name
//   }
// }
// let p = new Person('hello')
// console.log(p.#name)
// 4.类的函数和属性的修饰符
// class Animal {
//   // private name: string
//   // public name: string
//   protected name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }
// class Snack extends Animal {
//   move() {
//     super.name
//   }
// }
// let animal = new Snack('python')
// animal.name
// 5.readonly
// class Octopus {
//   readonly name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }
// let o = new Octopus('supman')
// o.name = 'superman'
// console.log(o.name)
// 6.参数属性
// class Animal {
//   readonly flegs: number = 8
//   constructor(readonly name: string) {
//   }
// }
// let a = new Animal('superman')
// console.log(a.name)
// 7.抽象类
// abstract class Animal {
//   name: string = 'python'
//   abstract move(): void
// }
// class Snack extends Animal {
//   move() {
//     console.log('moving...');
//   }
// }
// let a = new Snack()
// console.log(a.name)
// a.move()
// 8.类当做接口用
// class Point {
//   x: number = 100
//   y: number = 100
// }
// interface Point3D extends Point {
//   z: number
// }
// let pointer3d: Point3D = {
//   x: 1,
//   y: 1,
//   z: 1
// }
// 9.多继承
// interface Alerm {
//   alert(): void
// }
// interface Room {
//   width: number
// }
// class Door {
// }
// class SecurityDoor extends Door implements Alerm {
//   alert() {
//     console.log('alerming...')
//   }
// }
// class Windows extends Door implements Alerm, Room {
//   alert() {}
//   width = 100
// }
// class Car2 implements Alerm {
//   alert() {
//     console.log('alerming...');
//   }
// }
