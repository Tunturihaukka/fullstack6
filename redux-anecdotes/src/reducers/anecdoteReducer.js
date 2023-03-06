import { createSlice } from '@reduxjs/toolkit'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}


const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      return state.concat(asObject(action.payload))
    },
    voteAnecdote(state, action) {
      const id = action.payload
      const anecdoteReplacer = (anecdote, id) => {
        if (anecdote.id === id) {
          return Object.assign({}, anecdote, { votes: anecdote.votes + 1 })
        }
        return (
          anecdote
        )
      }
      return state.map(x => anecdoteReplacer(x, id))
    },
    setAnecdotes(state, action) {
      return [].concat(action.payload)
    }
  },
})

export const {
  createAnecdote,
  voteAnecdote,
  setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer