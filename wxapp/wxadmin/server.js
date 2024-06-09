const Koa = require('koa')
const Router = require('koa-router')
const wxappRouter = require('./router/wxapp')
const static = require('koa-static')
const path = require('path')
const app = new Koa()

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './public'

app.use(static(
  path.join( __dirname,  staticPath)
))

// 装载所有子路由
let router = new Router()
router.use('/api', wxappRouter.routes(), wxappRouter.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3333)