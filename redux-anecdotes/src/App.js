import AnecdoteForm from './components/AnecdoteList'
import AnecdoteList from './components/AnecdoteForm'
import Filter from './components/Filter'

const App = () => {

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
}

export default App