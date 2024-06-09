// 将token、timestamp、nonce三个参数进行字典序排序
// 将三个参数字符串拼接成一个字符串进行sha1加密
// 将加密后的字符串与signature对比，相等则表示请求来自于微信服务器
// 将 echostr 返回
const crypto = require('crypto')

function wxappController(ctx, next) {
  const token = 'weixin'
  const { signature, echostr, timestamp, nonce } = ctx.request.query
  const string1 = [token, timestamp, nonce].sort().join('')
  const hash = crypto.createHash('sha1')
                   .update(string1)
                   .digest('hex');

  if (hash === signature) {
    ctx.body = echostr
  } else {
    ctx.body = 'fail'
  }

}

module.exports = wxappController