// type Point = {
//   x: Number
//   y: Number
// }
// function printCode(pt: Point) {

// }
//type 定义变量类型
// printCode({
//   x: 100, y: 200
// })
type ID = Number | String
function printId(id: ID) {

}
printId('1000')
printId(' ')
type UserInput = String
function san(str: String): UserInput {
  return str.slice(0, 2)
}
let userStr = san('hello')