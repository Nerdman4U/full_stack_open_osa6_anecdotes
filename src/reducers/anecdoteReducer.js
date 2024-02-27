import { createSlice } from '@reduxjs/toolkit'
import anecdotesAtStart from './anecdotes'
import { getAll } from '../services/anecdotes'
import { create } from '../services/anecdotes'

const getId = () => Date.now()+Math.floor(Math.random()*1000)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)
const initialize = () => {
  return async dispatch => {
    const anecdotes = await getAll()
    return dispatch(setNotes(anecdotes))
  }
}

const add = (content) => {
  return async dispatch => {
    const anecdote = await create(content)
    return dispatch(appendNote(anecdote))
  }
}

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    vote(state, action) {
      const id = action.payload.id
      //console.log('10 recucer VOTE state.anecdotes:', state, 'action:', action)
      const anecdoteToChange = state.find(a => a.id === id)
      //console.log('20 recucer VOTE anecdoteToChange:', anecdoteToChange, 'id:', id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote
      )
    },
    appendNote(state, action) {
      state.push(action.payload)
    },
    setNotes(state, action) {
      return action.payload
    }
  }
})

export default anecdoteSlice.reducer
export const { 
  vote, 
  newAnecdote,
  appendNote,
  setNotes
} = anecdoteSlice.actions
export { 
  initialState,
  initialize,
  asObject,
  add
}

