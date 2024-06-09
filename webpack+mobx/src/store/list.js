import {
  action,
  observable
} from 'mobx'

class List {
  @observable
  list = ['a', 'b']

  @action.bound
  setList() {
    this.list.push('def')
  }
}

export default new List()