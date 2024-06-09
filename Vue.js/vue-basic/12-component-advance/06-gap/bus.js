const bus = new Vue()

bus.greeting = 'hello'
bus.$on('sayHello', (str) => {
  bus.greeting = str
})

export default bus