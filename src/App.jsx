import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"

export default function App() {
  return (
    <div className="p-12">
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

