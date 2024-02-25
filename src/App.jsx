import { useSelector, useDispatch } from 'react-redux'

const AddNew = () => {
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

const App = () => {
  const anecdotes = useSelector(state => state.sort((a,b) => b.votes - a.votes))
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch({ type: 'VOTE', id: id })
  }

  return (
    <>
    <div className="p-12">
      <h2 className='text-5xl font-bold'>Anecdotes</h2>
      <div className="columns-3">
      {anecdotes.map(anecdote =>
        <div key={anecdote.id} className='my-4'>
          <div className="italic w-4/6 mr-12">
            {anecdote.content}
          </div>
          <div className="w-1/6 mr-2">
            has {anecdote.votes} votes. 
          </div>
          <div className="">  
            <button onClick={() => vote(anecdote.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Vote </button>
          </div>
        </div>
      )}
      </div>
      <AddNew />
    </div>
    </>
  )
}

export default App

