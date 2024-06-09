import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('store', 'list')
@observer
class Search extends Component {
  render() {
    return (
      <>
        <div>
          {this.props.store.count}
          {this.props.list.list}
        </div>
        <div>
          <button onClick={() => this.props.list.setList()}>change</button>
        </div>
      </>
    )
  }
}

export default Search
