import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notificationMessage } from '../reducers/notificationReducer'

const AnecdoteForm = ({ store }) => {

    const addAnecdote = (event) => {
        event.preventDefault()
        store.dispatch(
            createAnecdote(event.target.anecdote.value)
        )
        store.dispatch(notificationMessage('Uusi anecdote lisätty')
        )
        setTimeout(() =>
        store.dispatch(notificationMessage('')), 5000)
        
        event.target.anecdote.value = ''
    }
    return (

        <div>
            <h2>Create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name="anecdote" /></div>
                <button type="submit" >create</button>
            </form>
        </div>
    )
}
export default AnecdoteForm