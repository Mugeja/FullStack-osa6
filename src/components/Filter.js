import React from 'react'
import { setFilter } from '../reducers/FilterReducer' 

const Filter = ({store}) => {
  const handleChange = (event) => {
      store.dispatch(setFilter(event.target.value))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter