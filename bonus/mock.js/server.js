const http = require('http')
var Mock = require('mockjs')

http.createServer((req, res) => {
  var data = Mock.mock({
    img: "@cparagraph(3)",
  })
  res.end(JSON.stringify(data))
}).listen(9527)