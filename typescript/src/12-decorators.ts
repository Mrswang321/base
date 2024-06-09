// function Greeter(greeting: string) {
//   return function (target: Function): void {
//     // console.log(target)
//     target.prototype.greet = function(): void {
//       console.log(greeting)
//     }
//   }
// }

// // interface IGreet {
// //   greet(): void
// // }

// @Greeter('Hello World')
// class Greeting {
//   constructor() {
    
//   }
// }

// let myGreeting: any = new Greeting()
// myGreeting.greet()

// function logProperty(target: any, key: string) {
//   console.log(target)
//   console.log(key)
//   target['surname'] = '女'
// }

// class Person {
//   @logProperty public surname: string

//   constructor(surname: string) {
//     this.surname = surname
//   }
// }

// let person = new Person('男')
// console.log(person.surname)

// function desc(target: any, key: string, descriptor: {[propsName: string]: any}) {
//   // console.log(target)
//   // console.log(key)
//   // console.log(descriptor)
//   // target.say = () => {
//   //   console.log('hello')
//   // }
//   let greet = descriptor.value

//   descriptor.value = () => {
//     greet()
//     console.log('haha')
//   }
// }

// function property(target: any, key: string) {
//   console.log(target)
// }

// class Greeter {
//   @property
//   greeting: string

//   name: string

//   constructor(greeting: string) {
//     this.greeting = greeting
//   }

//   @desc
//   greet() {
//     console.log('hello')
//   }
// }

// let greeter: any = new Greeter('')
// // console.log(greeter.say())
// greeter.greet()

// function validate (target: any, name: string, descriptor: {[propName: string]: any}) {

// }

// function required(target: any, name: string, index: number) {
//   // console.log(target)
//   // console.log(name)
//   console.log(index)
//   // console.log(target.greet)
//   // if (index) {

//   // }
// }

// class Greeter {
//   greeting: string;

//   constructor(message: string) {
//     this.greeting = message;
//   }

//   @validate
//   greet(@required name: string, @required name2: string) {
//     return "Hello " + name + ", " + this.greeting;
//   }
// }

// let greeter = new Greeter('')
// greeter.greet()

function classDesc(target: Function) {
  console.log('class')
}

function propDesc(target: any, name: string) {
  console.log('properties')
}

function methodDesc(target: any, name: string, descriptor: any) {
  console.log('methods')
}

function paramDesc(target: any, name: string, index: number) {
  console.log('params 1');
}

function paramDesc2(target: any, name: string, index: number) {
  console.log('params 2');
}


@classDesc
class Person {
  @propDesc
  name: string

  constructor(name: string) {
    this.name = name
  }

  @methodDesc
  sayName(@paramDesc arg1: string, @paramDesc2 arg2: string) {
    console.log(this.name)
  }
}