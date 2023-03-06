import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'


const getId = () => (100000 * Math.random()).toFixed(0)


const asObject = (anecdote, givenVotes = 0) => {
  return {
    content: anecdote,
    id: getId(),
    votes: givenVotes
  }
}


const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      return state.concat(action.payload)
    },
    voteAnecdote(state, action) {
      const anecdote = action.payload
      const anecdoteReplacer = (anecdoteToCheck, id) => {
        if (anecdoteToCheck.id === id) {
          return anecdote
        }
        return (
          anecdoteToCheck
        )
      }
      return state.map(x => anecdoteReplacer(x, anecdote.id))
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

export const giveVote = (anecdote) => {
  return async dispatch => {
    const newAnecdote = Object.assign({}, anecdote, { votes: anecdote.votes + 1 })
    const storedAnecdote = await anecdoteService.updateVotes(newAnecdote)
    dispatch(voteAnecdote(storedAnecdote))
  }
}

export const newAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecdoteService.createNew(asObject(content))
    dispatch(createAnecdote(anecdote))
  }
}

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export default anecdoteSlice.reducer