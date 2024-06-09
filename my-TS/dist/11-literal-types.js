var testString = "hello";
testString = "ojbk";
var constantString = "world";
// constantString="a"
// let x: "hello" = "hello"
// x="world"
function printText(s, alignment) {
}
printText('hello', 'left');
// printText('world', 'ojbk')
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function configure(x) {
}
configure({ width: 500 });
configure('auto');
// configure('automatic')
var b1 = true;
var b2 = false;
var obj = {
    count: 0
};
if (true) {
    obj.count = 1;
}
function handleRwquest(url, method) {
    console.log(url, method);
}
// const req = {
//   url: 'https://baidu.com',
//   methos: 'GET' //ts自动推算为字符串 但是字符串范围太大
// }
var req = {
    url: 'https://baidu.com',
    methos: 'GET' //ts自动推算为字符串 但是字符串范围太大
};
// const req = {
//   url: 'https://baidu.com',
//   methos: 'GET' as "GET" //ts自动推算为字符串 但是字符串范围太大
// }
//报错    
// handleRwquest(req.url, req.methos )
//类型推断 
handleRwquest(req.url, req.methos);
