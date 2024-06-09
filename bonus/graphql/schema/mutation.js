const { GraphQLObjectType, GraphQLBoolean, GraphQLString, GraphQLFloat, GraphQLInt } = require("graphql")

const axios = require('axios')

const ResultType = new GraphQLObjectType({
  name: 'ResultType',
  fields: {
    ret: {
      type: GraphQLBoolean
    },
    message: {
      type: GraphQLString
    }
  }
})

const RootMutationType = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    create: {
      type: ResultType,
      args: {
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
          type: GraphQLInt
        }
      },
      async resolve(obj, args) {
        try {
          await axios.post('http://localhost:8000/subjects', {
            ...args
          })
          return {
            ret: true,
            message: 'success'
          }
        } catch(e) {
          return {
            ret: false,
            message: 'fail'
          }
        }
      }
    },

    delete: {
      type: ResultType,
      args: {
        id: {
          type: GraphQLInt
        }
      },
      async resolve(obj, args, context) {
        try {
          await axios.delete(`http://localhost:8000/subjects/${args.id}`)
          return {
            ret: true,
            message: 'succ'
          }
        } catch (e) {
          return {
            ret: false,
            message: e.message
          }
        }
      }
    },

    put: {
      type: ResultType,
      args: {
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
          type: GraphQLInt
        }
      },
      async resolve(obj, args) {
        try {
          await axios.put(`http://localhost:8000/subjects/${args.id}`, {
            ...args
          })
          return {
            ret: true,
            message: 'succ'
          }
        } catch (e) {
          return {
            ret: false,
            message: e.message
          }
        }
      }
    },

    patch: {
      type: ResultType,
      args: {
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
          type: GraphQLInt
        }
      },
      async resolve(obj, args) {
        try {
          await axios.patch(`http://localhost:8000/subjects/${args.id}`, {
            ...args
          })
          return {
            ret: true,
            message: 'succ'
          }
        } catch (e) {
          return {
            ret: false, 
            message: e.message
          }
        }
      }
    }
  }
})

module.exports = RootMutationType