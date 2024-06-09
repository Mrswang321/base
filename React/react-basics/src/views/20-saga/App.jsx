import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadData, loadData2 } from './actionCreators'

@connect(
  state => ({
    list: state.list
  }),
  dispatch => ({
    loadData(url) {
      dispatch(loadData(url))
    },
    loadData2(url) {
      dispatch(loadData2(url))
    }
  })
)
class App extends Component {
  render() {
    return (
      <div>
        {
          this.props.list.map((v,index) => {
            return (
              <div key={index}>{v}</div>
            )
          })
        }
      </div>
    );
  }

  componentDidMount() {
    // this.props.loadData('/manifest.json')
    this.props.loadData2('/manifest.json')
  }
}

export default App;