import React, { Component } from 'react';

class App extends Component {
  state = {
    keywords: '',
    list: []
  }

  handleChange = (e) => {
    this.setState({
      keywords: e.target.value
    })
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.state.list.push(this.state.keywords)
      this.setState({
        keywords: ''
      })
    }
  }

  handleClick = (index) => {
    return (e) => {
      this.state.list.splice(index, 1)
      this.setState({})
    }
  }

  render() {
    return (
      <>
        <div>
          <input type="text" 
            value={this.state.keywords} 
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
          />
        </div>
        <ul>
          {
            this.state.list.map((value,index) => {
              return (
                <li key={value}>
                  {value} 
                  <button onClick={this.handleClick(index)}>remove</button>
                </li>
              )
            })
          }
        </ul>
      </>
    );
  }
}

export default App;