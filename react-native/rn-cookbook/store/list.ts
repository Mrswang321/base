import { makeObservable, observable, action, runInAction, computed } from 'mobx'
import axios from 'axios'

class List {
  list: Array<any> = []

  constructor() {
    makeObservable(this, {
      list: observable,
      loadData: action.bound,
      swiperData: computed
    })
  }

  async loadData() {
    try {
      let result = await axios.get('http://192.168.31.217:9000/list')
      runInAction(() => {
        this.list = result.data.data
      })
    } catch(e) {
      console.log(e)
    }
  }

  get swiperData() {
    return this.list.slice(0, 5)
  }

  get top10Data() {
    return this.list.slice(0, 10)
  }

  // 暂时不能这样传参
  // get getSliceData(start: number, end: number) {
  //   return this.list.slice(start, end)
  // }
}

const store = new List()

export {
  store,
  List
}