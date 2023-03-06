import { useSelector, useDispatch } from 'react-redux'
import { giveVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const unsortedAnecdotes = useSelector(state => state.anecdotes)
  const anecdotes = [].concat(unsortedAnecdotes).sort(compareAnecdotes)
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

  const vote = (anecdote) => {
    dispatch(giveVote(anecdote))
    dispatch(setNotification(`you voted '${anecdote.content}'`))
    setTimeout(() => {dispatch(setNotification(''))}, 5000)
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
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )}

const compareAnecdotes = ( a,b ) => {
  //console.log('a', a, 'b', b)

  if (a.votes > b.votes) {
    return -1
  }
  if (b.votes > a.votes) {
    return 1
  }
  return 0
}

export default AnecdoteList