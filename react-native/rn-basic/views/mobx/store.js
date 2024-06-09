const { observable, autorun, set } = require('mobx')

// const map = observable.map({x: 0, y: 1})

// map.set('x', 100)
// // console.log(map.get('x'))

// autorun(() => {
//   console.log(map.get('x'))
// })

// setTimeout(() => {
//   map.set('x', 200)
// }, 1000)

// const obj = observable({x: 0, y: 1})
// // const obj2 = {x: 0, y: 1}

// autorun(() => {
//   // console.log(obj.x)
//   console.log(arr[0])
// })

// setTimeout(() => {
//   obj.x = 100
// }, 1000)

// const arr = observable(['a', 'b', 'c'])

// autorun(() => {
//   console.log(arr[0])
// })

// setTimeout(() => {
//   arr[0] = 'aaa'
// }, 1000)

// const num = observable.box(7)
// num.set(700)
// console.log(num.get())

// const x = ref(3)
// console.log(x.value)

// const x = ref(3)
// console.log(x.current)

class Store {
  @observable
  obj = {
    x: 0,
    y: 1
  }
}

const store = new Store()

autorun(() => {
  console.log(store.obj)
})

store.obj = {
  x: 100,
  y: 200
}