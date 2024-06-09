import { makeObservable, runInAction, observable, action } from 'mobx'
import AsyncStorage from '@react-native-async-storage/async-storage'

class ShowMap {
  isEnabled = true

  constructor() {
    makeObservable(this, {
      isEnabled: observable,
      toggleSwitch: action,
      setEnable: action.bound
    })
  }

  toggleSwitch() {
    let value = !this.isEnabled
    this.isEnabled = value
    AsyncStorage.setItem('isEnabled', value.toString())
  }

  async setEnable() {
    let result = await AsyncStorage.getItem('isEnabled')
    let value: boolean
    if (result === null) {
      value = true
    } else if(result === 'true') {
      value = true
    } else {
      value = false
    }
    runInAction(() => {
      this.isEnabled = value
    })
  }
}

const showMap = new ShowMap()

export {
  showMap,
  ShowMap
}