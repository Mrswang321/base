import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import co from 'co'

import reducer from './reducer'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer, 
  applyMiddleware(sagaMiddleware)
)

sagas.forEach(saga => sagaMiddleware.run(saga))

// function* gen(x) {
//   console.log(1)
//   var y = yield x + 2
//   var z = y * (yield x + 5)
//   console.log(2)
//   return z
// }

// var g = gen(1)
// var result = g.next()
// console.log(result)
// var result2 = g.next(100)
// console.log(result2)
// var result3 = g.next(5)
// console.log(result3)

// function *foo() {
//   yield 1
//   yield 2
//   yield 3
//   yield 4
//   return 5
// }

// let g = foo()

// for(let v of g) {
//   console.log(v)
// }

// function* foo() {
//   yield 'a'
//   yield 'b'
// }

// function* bar() {
//   yield 'x'
//   yield* foo()
//   yield 'y'
// }

// for(let v of bar()) {
//   console.log(v)
// }

// function* gen() {
//   console.log('start')
//   let url = '/manifest.json'
//   let result = yield fetch(url).then(response=>response.json()).then(result=>result)
//   console.log(result)
//   return result
// }

// let g = gen()
// let res = g.next()
// res.value.then((result) => {
//   console.log(result)
//   g.next(result)
// })

// co(gen).then(function() {
//   console.log('done')
// })

export default store