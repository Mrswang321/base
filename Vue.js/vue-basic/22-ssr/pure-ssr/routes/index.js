var express = require('express');
var Vue = require('vue')
var fs = require('fs')
var path = require('path')

const template = require('fs').readFileSync(path.resolve(__dirname, '../template/index.html'), 'utf-8');
var renderer = require('vue-server-renderer').createRenderer({
  template
})

var router = express.Router();

const context = {
  title: 'vue ssr',
  meta: `
    <meta name="keyword" content="vue,ssr">
    <meta name="description" content="vue srr demo">
  `,
};


/* GET home page. */
router.get('/', function(req, res, next) {
  const vm = new Vue({
    data: {
      title: 'world'
    },
    template: `
      <div>{{title}}</div>
    `
  })

  renderer.renderToString(vm, context)
    .then((html) => {
      // fs.writeFileSync(path.resolve(__dirname, '../public/index.html'), html)
      res.send(html)
    })
})

module.exports = router;
