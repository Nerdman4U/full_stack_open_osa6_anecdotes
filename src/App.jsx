import { useEffect } from "react"

import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"
import Filter from "./components/Filter"
import Notification from "./components/Notification"

import { initialize } from './reducers/anecdoteReducer'

import { useDispatch } from "react-redux"

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialize())
  }, [dispatch])

  return (
    <div className="p-12">
      <Notification />
      <Filter/>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

