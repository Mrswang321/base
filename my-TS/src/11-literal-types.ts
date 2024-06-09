let testString = "hello"
testString = "ojbk"
const constantString = "world"

// constantString="a"
// let x: "hello" = "hello"
// x="world"
function printText(s: String, alignment: 'left' | 'center' | 'reight') {

}
printText('hello', 'left')
// printText('world', 'ojbk')

function compare(a: String, b: String): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1
}
interface Options {
  width: Number
}

function configure(x: Options | 'auto') {

}
configure({ width: 500 })
configure('auto')
// configure('automatic')

let b1: true = true
let b2: false = false

const obj = {
  count: 0
}
if (true) {
  obj.count = 1
}

function handleRwquest(url: String, method: 'GET' | 'POST') {
  console.log(url, method)
}

// const req = {
//   url: 'https://baidu.com',
//   methos: 'GET' //ts自动推算为字符串 但是字符串范围太大
// }
const req = {
  url: 'https://baidu.com',
  methos: 'GET' //ts自动推算为字符串 但是字符串范围太大
} as const

// const req = {
//   url: 'https://baidu.com',
//   methos: 'GET' as "GET" //ts自动推算为字符串 但是字符串范围太大
// }
//报错    
// handleRwquest(req.url, req.methos )
//类型推断 
handleRwquest(req.url, req.methos as "GET")