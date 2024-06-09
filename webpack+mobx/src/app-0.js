// import { observable, autorun, computed } from 'mobx'

// class Store {
//   @observable
//   obj = {
//     x: 0,
//     y: 1
//   }

//   @observable x = 2200
// }

// const store = new Store()

// autorun(() => {
//   // console.log(store.obj)
//   console.log(store.x)
// })

// setTimeout(() => {
//   // store.obj.x = 100
//   // console.log(store.x)
//   // store.x = 200
//   console.log(200)
// }, 1000)

// export default store

// const list = observable(['a', 'b'])

// const computedLength = computed(() => {
//   return list.length
// })

// setTimeout(() => {
//   list.push('c', 'd')
// }, 2000)

// // autorun(() => {
  
// // })

// computedLength.observe((length) => {
//   console.log(length)
// })

import {observable, computed, reaction, action, runInAction} from 'mobx'

class Store{
  @observable arr = [];
  @observable obj = {a: 1};
  @observable map = new Map();
  @observable str = 'hello';
  @observable num = 123;
  @observable bool = false;

  @computed
  get result() {
    return this.str + this.num
  }

  @action.bound
  setStr(arg) {
    this.str = arg
  }

  @action.bound
  async loadData() {
    let result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('abc')
      }, 2000)
      // reject('err')
    })

    runInAction(() => {
      store.setStr(result)
    })

    // p.then((result) => {
    //   console.log(result)
    // }).catch((err) => {
    //   console.log(err)
    // })
  }
}
const store = new Store()

// const result = computed(() => store.str + store.num);
// console.log(result.get())
// // 监听数据的变化
// result.observe(({newValue, oldValue})=>{
//   console.log('result:', newValue)
// })
// //两次对store属性的修改都会引起result的变化
// store.str = 'world';
// store.num = 220;

// console.log(store.result)
// store.str = 'world';
// store.num = 220;
// console.log(store.result)

// autorun(() => {
//   console.log(store.result)
// })

// when(() => {
//   return false
// }, () => {
//   console.log(store.result)
// })

// reaction(() => {
//   return 'result: ' + store.result
// }, (args) => {
//   console.log(args)
// })

store.loadData()

reaction(() => {
  return store.result
}, (result) => {
  console.log(result)
})

// process.on('unhandledRejection', error => {
//   console.error('unhandledRejection', error);
//   // process.exit(1) // To exit with a 'failure' code
// })
