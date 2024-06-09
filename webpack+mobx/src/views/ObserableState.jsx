import React from 'react'
import { makeObservable, observable, override, computed, action } from "mobx"
import { observer } from 'mobx-react-lite'

class Parent {
    // not overridable
    observable1 = 10

    constructor(value) {
        makeObservable(this, {
            observable1: observable,
            computed1: computed,
            action1: action,
            arrowAction1: action
        })
    }

    // overridable
    get computed1() {
        return this.observable1 * 2
    }

    // overridable
    action1() {
      console.log(0)
        this.observable1++
    }

    // not overridable
    arrowAction1 = () => {}

    // workaround - not annotated - overridable
    overridableArrowAction1 = action(() => {})
}

class Child extends Parent {
    // new
    observable2 = 0

    constructor(value) {
        super()
        makeObservable(this, {
            // overriden fields
            action1: override,
            computed1: override,
            // new fields
            observable2: observable,
            computed2: computed,
            action2: action,
            arrowAction2: action
        })
    }

    // overrides
    get computed1() {
        return super.computed1 * 2
    }

    // overrides
    action1() {
      // console.log(1)
        super.action1()
    }

    // workaround - not annotated - overrides
    overridableArrowAction1 = action(() => {})

    // new
    get computed2() {
        return super.computed1 * 2
    }

    // new
    action2() {
        super.action1()
    }

    // new
    arrowAction2 = () => {}
}

const store = new Child()

const Home = observer(() => {
  // console.log(store.computed2)
  // store.action2()
  store.action1()
  return (
    <div store={store}>hello</div>
  )
})

export default Home