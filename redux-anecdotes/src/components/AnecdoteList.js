import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.sort(compareAnecdotes))

  const vote = (id) => {
    dispatch(voteAnecdote(id))
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
          has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )}


const voteAnecdote = ( id ) => {
  return {
    type: 'VOTE',
    payload: { id }
  }
}

const compareAnecdotes = ( a,b ) => {
  if (a.votes > b.votes) {
    return -1
  }
  if (b.votes > a.votes) {
    return 1
  }
  return 0
}

export default AnecdoteList