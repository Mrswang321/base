function printCoord(pt: { x: Number, y: Number }) {
  console.log(pt.x, '===>', pt.y, '===>')
}
printCoord({
  x: 100, y: 4000
})
//可以不传
function printName(obj: { first: String, last?: String }) {
  // console.log(obj.last?.toUpperCase())
  // if (obj.last!=undefined) {
  //   console.log(obj.last.toUpperCase())
  // }
  console.log(obj.last?.toLocaleLowerCase())
}
printName({
  first: "first"
})
printName({// 要么传last属性传对，要么不传
  first: 'first', last: "last"
})