var express = require('express');
var router = express.Router();
var { graphql } = require('graphql')
// var schema = require('../schema/query')
// var schemaMutation = require('../schema/mutation')
var schema = require('../schema/schema')

/* GET home page. */
router.get('/list', function(req, res, next) {
  var query = `
  {
    movies (title: "3") {
      title,
      genres,
      rating,
      theater {
        name
      }
    }
  }
  `

  graphql(schema, query).then(result => {
    res.json(result)
  })
});

router.put('/update', (req, res, next) => {
  let { id, title, genres, rating, theater } = req.body

  let mutateQL = `
    mutation {
      put(
        id: ${id},
        title: "${title}",
        genres: "${genres}",
        rating: ${rating},
        theater: ${theater}
      ) {
        ret,
        message
      }
    }
  `

  graphql(schema, mutateQL).then(result => {
    res.json(result)
  })
})

module.exports = router;