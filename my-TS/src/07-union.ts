// function printId(id: Number | String) {

//   // console.log(id.toUpperCase())
//   if (typeof id == 'string') {
//     console.log(id.toUpperCase())
//   } else {
//     console.log(id)
//   }
// }
// printId(101)
// printId('101')
// printId({
//   myname: "00"
// })
function welcomePeople(x: String[] | String) {
  // console.log('hello')
  if (Array.isArray(x)) {
    console.log(x.join('and'))
  } else {
    console.log('welcome lone' + x)
  }
}
welcomePeople('a')
welcomePeople(['a,b', 'v'])
//联合类型 满足多个类型都能使用的方法 或者判断类型做不同操作

function getFirstThree(x: Number[] | String) {
  return x.slice(0, 3)
}
console.log(getFirstThree('asaefisbnfjon')) 