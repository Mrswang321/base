import React, { Component } from 'react'
import {
  Route,
  Prompt,
  Switch,
  Link,
  withRouter
} from 'react-router-dom'

function Child1() {
  return (
    <div>child1</div>
  )
}

function Child2() {
  return (
    <div>child2</div>
  )
}

@withRouter
class App extends Component {
  state = {
    isNext: true
  }
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/child1">child1</Link></li>
          <li><Link to="/child2">child2</Link></li>
        </ul>
        <Switch>
          <Route path="/child1">
            <Child1></Child1>
          </Route>
          <Route path="/child2">
            <Child2></Child2>
          </Route>
          <Route>
            <Prompt
              // when={this.state.isNext}
              message={() => {
                return this.state.isNext ? "你真的离开吗？" : false
              }}
            ></Prompt>
          </Route>
        </Switch>
      </div>
    );
  }
  componentDidMount() {
    this.props.history.listen(() => {
      console.log(0)
    })
  }
}

export default App;