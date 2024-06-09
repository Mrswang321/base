const axios = require('axios')
const randomstring = require('randomstring')
// const url = require('url')
const querystring = require('querystring')
const crypto = require('crypto')

async function jssdkController(ctx, next) {
  const appId = 'wx7ba8ee8a8beace33'

  let result1 = await axios({
    url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + appId + '&secret=d62705bd6fdf27441397683019077e20'
  })

  const access_token = result1.data.access_token
  
  let result2 = await axios({
    url: 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=' + access_token + '&type=jsapi'
  })

  const jsapi_ticket = result2.data.ticket
  const noncestr = randomstring.generate(32)
  const timestamp = Math.floor(new Date().getTime() / 1000)
  const url = 'https://www.walter666.cn/index.html'

  const _sign = {
    noncestr,
    jsapi_ticket,
    timestamp,
    url
  }

  const sign = Object.keys(_sign).sort().reduce((obj, key) => {
    obj[key] = _sign[key]
    return obj
  }, {})

  const string1 = querystring.stringify(sign, null, null, {
    encodeURIComponent: (str) => {
      return querystring.unescape(str)
    }
  })

  const signature = crypto.createHash('sha1').update(string1).digest('hex')
  
  ctx.body = {
    appId,
    timestamp,
    nonceStr: noncestr,
    signature
  }
}

module.exports = jssdkController