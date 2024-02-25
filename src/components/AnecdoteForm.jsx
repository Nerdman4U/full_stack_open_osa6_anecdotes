import { useDispatch } from 'react-redux'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const newAnecdote = (data) => {
    console.log('create', data)
    dispatch({ type: 'NEW_ANECDOTE', data: data })
  }

  const handleAddNew = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdote(content)
  }

  return (
    <>
    <h2 className="text-5xl font-bold">Create new</h2>
    <form onSubmit={handleAddNew}>
      <div className="my-4">
        <input name="anecdote" className="shadow appearance-none border border-blue-500 w-5/6 rounded py-2 px-3 mr-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"/>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">create</button>
      </div>
    </form>
    </>    
  )
  
}

export default AnecdoteForm