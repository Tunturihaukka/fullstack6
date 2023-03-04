import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes.sort(compareAnecdotes))
  const filter = useSelector(state => state.filter)


  const testAnecdote = ( anecdote ) => {
    if (filter.content === '') {
      return true
    } else if (anecdote.content.includes(filter.content)) {
      return true
    }
    return false
  }

  const filteredAnecdotes = anecdotes.filter(x => testAnecdote(x))


  const vote = (id) => {
    dispatch(voteAnecdote(id))
  }

  return (
    <div>
      {filteredAnecdotes.map(anecdote =>
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