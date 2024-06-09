import React from 'react'
import { observer, inject } from 'mobx-react'
import Search from './Search'

const Home = inject('store')(
  observer(
    function Home(props) {
      let { store } = props
      const handleClick = () => {
        store.add()
      }
      return (
        <>
          <div>
            {store.count}
            <button onClick={handleClick}>+</button>
          </div>

          <Search></Search>
        </>
      )
    }
  )
)

export default Home
