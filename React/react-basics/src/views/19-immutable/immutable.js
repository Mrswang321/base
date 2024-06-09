const Immutable = require('immutable')

const { Map, is, List, Seq, fromJS, Set, Range } = Immutable

// const map = Map({
//   x: 0,
//   y: 1,
//   z: 2
// })

// const map2 = Map({
//   x: 0,
//   y: 1,
//   z: 2
// })

// const map2 = map.set('x', 10)

// console.log(Object.is(map, map2))
// console.log(map.equals(map2))
// console.log((is(map, map2)))

// const list = List(['a', 'b', 'c'])
// const list2 = list.push('d')

// console.log(list.size)
// console.log(list2.size)


// const map = Map({
//   x: 0,
//   y: 1,
//   z: 2
// })

// const map2 = map

// const map3 = map2.set('x', 100)

// console.log(map.get('x'))
// console.log(map2.get('x'))
// console.log(map3.get('x'))

// console.log(map.equals(map2))

// const maped = map.map((v, k, i) => {
//   return k.toUpperCase()
// })

// console.log(maped.join(''))

// const map = Map({
//   x: 0,
//   y: 1,
//   z: 2,
//   k: {
//     a: {
//       w: 900,
//       q: 1000
//     }
//   }
// })

// const map2 = Map({
//   x: 100,
//   k: {
//     a: {
//       aa: 800
//     }
//   }
// })

// const obj = {
//   x: 300
// }

// const map3 = map2.mergeDeep(map)
// console.log(map3.toJS())

// const map3 = map.merge(obj)
// const map4 = obj.merge(map)

// console.log(map3.toJS())
// console.log(map4)

// const list = List(['a', 'b', 'c'])
// const list2 = List(['d', 'e'])
// const arr = ['w', 'z']
// // const list3 = list2.concat(arr)
// const list3 = arr.concat(list2)
// console.log(list3)

// const obj = {
//   x: 1,
//   y: 2,
//   z: 3
// }

// const seq = Seq(obj)
// const seq2 = seq.map(v => {
//   console.log(v)
//   return v * v
// })

// console.log(seq2.get('x'))

// const map = Map(obj)
// const map2 = map.map(v => {
//   console.log(v)
//   return v * v
// })
// console.log(map2.get('x'))

// const obj = {
//   x: 1,
//   y: 2,
//   z: 3,
//   w: Map({
//     a: 0
//   })
// }

// const map = fromJS(obj)
// console.log(map.toJS())
// const obj2 = map.toJS()
// console.log(obj2 === obj)

// const list = List(['a', 'b'])
// const arr = [ 'w', ...list, 'y' ]
// console.log(arr)

// const arr = ['a', 'b']
// const list = List(['w', ...arr, 'y'])
// console.log(list.toJS())


// let map = Map({
//   x: 0,
//   y: Map({
//     list: List(['a', Map({w: 100})])
//   })
// })

// console.log(map.toJS())
// console.log(map.get('x'))
// console.log(map.get('y').get('list').get(1).get('w'))
// console.log(map.getIn(['y', 'list', 1, 'w']))
// console.log((map.get('y').get('list'))[0])
// let map2 = map.set('x', 100)
// let map2 = map.setIn(['y', 'list', 1, 'w'], 1000)
// let map2 = map.updateIn(['y', 'list', 1, 'w'], (value) => {
//   return value * value
// })
// console.log(map2.getIn(['y', 'list', 1, 'w']))


// let map = Map({x: 0, y: 1})
// let set = Set(List(['a', 'b'])).add(map)
// console.log(set.has(Map({x: 0, y: 1})))

// let map = Map({
//   x: 0,
//   y: Map({
//     list: List(['a', Map({w: 100})])
//   })
// })

// let xxx = map.withMutations((value) => {
//   value.setIn(['y', 'list', 1, 'w'], 3000)
//   return 100
// })

// console.log(xxx.getIn(['y', 'list', 1]).toJS())

// const oddSquares = Seq([ 1, 2, 3, 4, 5, 6, 7, 8 ])
//   .filter(x => {
// 		console.log('filter x:' + x)
// 		return x % 2 !== 0
//   })
//   .map(x => {
// 		console.log('map x:' + x)
// 		return x * x
//   });

// console.log(oddSquares.get(3))

// const { Seq, Map } = require('immutable');

// const map = Map({ a: 1, b: 2, c: 3 });
// const lazySeq = Seq(map);
// const newMap = lazySeq
//   .flip()
//   .map(key => key.toUpperCase())
//   .flip();

// console.log(newMap.toObject())

// const { Range } = require('immutable');

// const aRange = Range(1, Infinity)
//   .skip(1000)
//   .map(n => -n)
//   .filter(n => n % 2 === 0)
//   .take(1000)
//   // -1001,-1002,-1003,-1004,...
//   .reduce((r, n) => r * n, 1)
  
// console.log(aRange)