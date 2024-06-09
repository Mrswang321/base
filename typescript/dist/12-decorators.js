// function Greeter(greeting: string) {
//   return function (target: Function): void {
//     // console.log(target)
//     target.prototype.greet = function(): void {
//       console.log(greeting)
//     }
//   }
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
function classDesc(target) {
    console.log('class');
}
function propDesc(target, name) {
    console.log('properties');
}
function methodDesc(target, name, descriptor) {
    console.log('methods');
}
function paramDesc(target, name, index) {
    console.log('params 1');
}
function paramDesc2(target, name, index) {
    console.log('params 2');
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayName = function (arg1, arg2) {
        console.log(this.name);
    };
    __decorate([
        propDesc
    ], Person.prototype, "name", void 0);
    __decorate([
        methodDesc,
        __param(0, paramDesc), __param(1, paramDesc2)
    ], Person.prototype, "sayName", null);
    Person = __decorate([
        classDesc
    ], Person);
    return Person;
}());
