var express = require('express');
var router = express.Router();
var axios = require('axios')
var jwt = require('jsonwebtoken')
var WXBizDataCrypt = require('./WXBizDataCrypt')
var appId = 'wx0f5c1de30c47ef5d'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/weapp-getphonenumber', (req, res, next) => {
  const token = req.body.token
  const encryptedData = req.body.encryptedData
  const iv = req.body.iv
  try {
    var decoded = jwt.verify(token, 'weapp-gp21')
    console.log(decoded)
    if (decoded) {
      const sessionKey = decoded.session_key
      var pc = new WXBizDataCrypt(appId, sessionKey)
      var data = pc.decryptData(encryptedData , iv)
      res.send(data)
    }
  } catch(e) {
    res.send('error')
  }
})

router.get('/weapp-auth', async (req, res, next) => {
  const code = req.query.code
  const result = await axios.get('https://api.weixin.qq.com/sns/jscode2session?appid=wxeb8c70d2f9b9d1d3&secret=96387c52f74d0ab2694cdb6888936b42&js_code='+ code +'&grant_type=authorization_code')
    .then((result) => {
      return result
    })

  console.log(result.data)

  const { session_key, openid } = result.data

  var token = jwt.sign({ session_key, openid }, 'weapp-gp21')

  res.send(token)
})

router.post('/weapp-auth', (req, res, next) => {
  const token = req.body.token
  try {
    var decoded = jwt.verify(token, 'weapp-gp21')
    if (decoded) {
      console.log(decoded)
      res.send('ok.')
    }
  } catch(e) {
    res.send('error')
  }
})

module.exports = router;
