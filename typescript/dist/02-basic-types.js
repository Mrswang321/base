// 1.Boolean
// let isDone: boolean = true
// 2.Number
// let count: number = 0
// 3.String
// let surname: string = 'hello'
// 4.Array
// let list: number[] = [1, 3, 5]
// let list2: Array<number> = [4, 5, 6]
// 5.Enum
// enum Direction { 
//   NORTH = 3,
//   SOUTH,
//   EAST,
//   WEST
// }
// let dir: Direction = Direction.NORTH
// console.log(dir)
// console.log(Direction.WEST);
// enum Direction {
//   NORTH="NORTH",
//   SOUTH=100
// }
// let dir: Direction = Direction.NORTH
// console.log(dir)
// console.log(Direction.SOUTH)
// enum Enum {
//   A,
//   B,
//   C="C",
//   D="D",
//   E=8,
//   F=0
// }
// console.log(Enum.C);
// 6.Any
// let notSure: any = 666
// notSure = 'hello'
// let anyvalue: any
// anyvalue = 'hello'
// let anyvalue2: boolean = anyvalue
// 7.Unknown
// let value: unknown
// value = true
// // value = 'hello'
// let value1: unknown = value
// let value2: boolean = value
// 8.Tuple
// let tupleType: [string, boolean]
// tupleType = ['hello', true]
// tupleType = [true, 'hello']
// console.log(tupleType[0])
// 9.Void
function warnUser() {
    return undefined;
}
// 10.Null, Undefined
// let x: number = undefined
var y = undefined;
var z = null;
// 11.Never
function error(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) { }
}
