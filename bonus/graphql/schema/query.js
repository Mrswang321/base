const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat
} = require('graphql')

const axios = require('axios')

const TheaterType = new GraphQLObjectType({
  name: 'theaterType',
  fields: {
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    }
  }
})

const MovieType = new GraphQLObjectType({
  name: 'movieType',
  fields: {
    id: {
      type: GraphQLInt
    },
    title: {
      type: GraphQLString
    },
    genres: {
      type: GraphQLString
    },
    rating: {
      type: GraphQLFloat
    },
    theater: {
      type: TheaterType,
      async resolve(obj) {
        let result = await axios.get(`http://localhost:8000/theaters/${obj.theater}`)
        return result.data
      }
    },
  }
})

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    hello: {
      type: GraphQLString,
      resolve() {
        return 'world'
      }
    },
    movie: {
      type: MovieType,
      args: {
        id: {
          type: GraphQLInt
        }
      },
      async resolve(obj, args, context) {
        // console.log(args)
        // console.log(context)
        let result = await axios.get(`http://localhost:8000/subjects/${args.id}`)
        // let result = await axios.get(`http://localhost:8000/subjects/${obj.id}`)
        return result.data
      }
    },
    movies: {
      type: new GraphQLList(MovieType),
      args: {
        title: {
          type: GraphQLString
        }
      },
      async resolve(obj, args) {
        // let result = await axios.get(`http://localhost:8000/subjects?title_like=${args.title}`)
        let result = await axios.get('http://localhost:8000/subjects')
        return result.data
      }
    }
  }
})

module.exports = RootQueryType