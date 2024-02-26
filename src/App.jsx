import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"
import Filter from "./components/Filter"

export default function App() {
  return (
    <div className="p-12">
      <Filter/>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

