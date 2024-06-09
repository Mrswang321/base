import { createContext, Component } from 'react'

const myContext = createContext({
  color: 'red'
})

const { Provider, Consumer: MyConsumer } = myContext

class MyProvider extends Component {
  state = {
    color: 'red'
  }

  changeColor = (color) => {
    this.setState({
      color
    })
  }

  render() {
    return (
      <Provider value={
        {
          color: this.state.color, 
          changeColor: this.changeColor
        }
      }>
        {this.props.children}
      </Provider>
    )
  }
}

export {
  myContext,
  MyConsumer,
  MyProvider
}