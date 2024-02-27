import { createSlice } from '@reduxjs/toolkit'
import anecdotesAtStart from './anecdotes'
import { getAll } from '../services/anecdotes'
import { create, update } from '../services/anecdotes'
import { setNotification } from './notificationReducer'

const getId = () => `${Date.now()+Math.floor(Math.random()*1000)}`

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
    dispatch(setNotification(`Added '${content}'`, 1))
    return dispatch(appendNote(anecdote))
  }
}

const modify = (obj) => {
  console.log('modify: obj:', obj)
  return async dispatch => {
    const changedAnecdote = {
      ...obj,
      votes: obj.votes + 1
    }
    const result = await update(changedAnecdote)
    console.log('modify: result:', result)
    dispatch(setNotification(`you voted '${obj.content}'`, 10))
    return dispatch(vote(result))
  }
}

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    vote(state, action) {
      const id = action.payload.id
      console.log('10 recucer VOTE state.anecdotes:', state, 'action:', action)
      const anecdoteToChange = state.find(a => a.id === id)
      console.log('20 recucer VOTE anecdoteToChange:', JSON.parse(JSON.stringify(anecdoteToChange)), 'id:', id)
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : action.payload
      )
    },
    appendNote(state, action) {
      state.push(action.payload)
    },
    setNotes(state, action) {
      return action.payload
    },
    replace(state, action) {
      return state.map(anecdote =>
        anecdote.id !== action.payload.id ? anecdote : action.payload
      )
    }
  }
})

export default anecdoteSlice.reducer
export const { 
  vote, 
  newAnecdote,
  appendNote,
  setNotes,
  replace
} = anecdoteSlice.actions
export { 
  initialState,
  initialize,
  asObject,
  add,
  modify
}

