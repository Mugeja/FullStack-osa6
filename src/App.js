import React from 'react'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = ({store}) => {
  
  return (
    <div>
      
      <Notification store={store} />
      <AnecdoteList store={store} />
      <Filter store = {store}/>
      <AnecdoteForm store={store} />
    </div>
  )
}

export default App
