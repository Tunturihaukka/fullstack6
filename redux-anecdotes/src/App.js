import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const anecdotes = useSelector(state => state.sort(compareAnecdotes))
  const dispatch = useDispatch()


  const vote = (id) => {
    dispatch(voteAnecdote(id))
  }

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
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
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

const compareAnecdotes = ( a,b ) => {
  if (a.votes > b.votes) {
    return -1;
  }
  if (b.votes > a.votes) {
    return 1;
  }
  return 0;
}

//action creators

const createAnecdote = ( content ) => {
  return {
    type: 'NEW_ANECDOTE',
    payload: {
      content
    }
  }
}

const voteAnecdote = ( id ) => {
  return {
    type: 'VOTE',
    payload: { id }
  }
}


export default App