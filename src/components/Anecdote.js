import React from 'react'

const Anecdote = ({ anecdote, handleClick }) => {
    return (
        <li>
            {anecdote.content}
            <p>has  {anecdote.votes} likes <button onClick={handleClick} >Vote</button> </p>
        </li>
    )
}
export default Anecdote