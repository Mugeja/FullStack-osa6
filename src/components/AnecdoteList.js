import React from 'react'
import Anecdote from './Anecdote'
import { vote } from '../reducers/anecdoteReducer'
import {notificationMessage} from '../reducers/notificationReducer'

const AnecdoteList = ({ store }) => {
    const {anecdotes, filter} = store.getState()

    const sortAnecdotes = () => {
        anecdotes.sort(function (a, b) {
            return b.votes - a.votes
        })
        return anecdotes.filter(x => x.content.toLowerCase().includes(filter.toLowerCase()))
    }
    

    const voteAnecdote = (anecdote) => {
        
        store.dispatch(vote(anecdote.id))
        store.dispatch(notificationMessage(`Äänestit "${anecdote.content}"` ))
        
        setTimeout(() => 
            store.dispatch(notificationMessage('')), 5000)
        
    }



    return (
        <ul>
            <h2>Anecdotes</h2>
            {sortAnecdotes().map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => voteAnecdote(anecdote)}
                />
            )}
        </ul>
    )
}

export default AnecdoteList