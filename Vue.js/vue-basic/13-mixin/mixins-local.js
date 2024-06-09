const mixins = {
  data() {
    return {
      x: {
        a: 0,
        c: 100
      }
    }
  },

  computed: {
    x2() {
      return this.x.c + 200
    }
  },

  methods: {
    handleClick() {
      console.log(0)
    }
  },

  beforeCreate() {
    console.log('beforeCreate')
  }
}

export default mixins