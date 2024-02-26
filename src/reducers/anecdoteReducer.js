import { createSlice } from '@reduxjs/toolkit'
import anecdotesAtStart from './anecdotes'

const getId = () => Date.now()+Math.floor(Math.random()*1000)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
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
    newAnecdote(state, action) {
      return [...state, asObject(action.payload)]
    }  
  }
})

export default anecdoteSlice.reducer
export const { 
  vote, 
  newAnecdote,
} = anecdoteSlice.actions
export { 
  initialState 
}

// const vote = (anecdote) => {  
//   return {
//     type: 'VOTE',
//     id: anecdote.id
//   }
// }

// const newAnecdote = (data) => {
//   return {
//     type: 'NEW_ANECDOTE',
//     data: data
//   }
// }

// export default reducer
// export {
//   vote,
//   newAnecdote,
//   initialState
// }

