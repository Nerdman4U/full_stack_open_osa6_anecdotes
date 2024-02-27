import { useEffect } from "react"

import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"
import Filter from "./components/Filter"
import Notification from "./components/Notification"

import { getAll } from './services/anecdotes'

import { setNotes } from './reducers/anecdoteReducer'

import { useDispatch } from "react-redux"

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    getAll().then(data => dispatch(setNotes(data)))
  })

  return (
    <div className="p-12">
      <Notification />
      <Filter/>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

