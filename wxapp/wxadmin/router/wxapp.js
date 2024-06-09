const Router = require('koa-router')
const wxappController = require('../controller/wxapp')
const jssdkController = require('../controller/jssdk')

let router = new Router()

router.get('/auth', wxappController)
router.get('/jssdk', jssdkController)

module.exports = router