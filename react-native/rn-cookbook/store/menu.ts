import { makeObservable, observable, action, runInAction, computed } from 'mobx'
import axios from 'axios'

interface IMenu {
  hotcate: any[]
  category: { [propsname: string]: any }
  material: { [propsname: string]: any }
}

class Menu {
  menu: IMenu = {
    hotcate: [],
    category: {},
    material: {}
  }

  constructor() {
    makeObservable(this, {
      menu: observable,
      loadData: action.bound,
      hotcate: computed,
      category: computed,
      material: computed
    })
  }

  async loadData() {
    try {
      let result = await axios.get('http://192.168.31.217:9000/category')
      runInAction(() => {
        this.menu = result.data.data
      })
    } catch(e) {
      console.log(e)
    }
  }

  get hotcate() {
    return this.menu.hotcate
  }

  get category() {
    return this.menu.category
  }

  get material() {
    return this.menu.material
  }

}

const menu = new Menu()

export {
  menu,
  Menu
}