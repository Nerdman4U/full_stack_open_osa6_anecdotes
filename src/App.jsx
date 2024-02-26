import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"
import Filter from "./components/Filter"
import Notification from "./components/Notification"

export default function App() {
  return (
    <div className="p-12">
      <Notification />
      <Filter/>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

