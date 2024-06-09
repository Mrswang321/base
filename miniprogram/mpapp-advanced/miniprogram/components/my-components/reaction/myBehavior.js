const myBehavior = Behavior({
  properties: {
    myProperty: {
      type: Boolean
    },
    myBehaviorProperty: {
      type: String
    }
  },
  data: {
    myBehaviorData: 'world'
  },
  
  lifetimes: {
    ready() {
      console.log('behavior ready')
    }
  },

  methods: {
    myMethod: function(){
      console.log('myBehavior method.')
    }
  }
})

export default myBehavior