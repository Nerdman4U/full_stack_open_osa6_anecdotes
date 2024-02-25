import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const anecdotes = useSelector(state => state)
  console.log('anecdotes', anecdotes.length)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch({ type: 'VOTE', id: id })
  }
  const newAnecdote = (data) => {
    console.log('create', data)
    dispatch({ type: 'NEW_ANECDOTE', data: data })
  }

  return (
    <div className="p-12">
      <h2 className='text-5xl font-bold'>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id} className='my-4'>
          <flex className="italic w-4/6 mr-12">
            {anecdote.content}
          </flex>
          <flex className="w-1/6 mr-2">
            has {anecdote.votes} votes. 
          </flex>
          <flex>  
            <button onClick={() => vote(anecdote.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Vote </button>
          </flex>
        </div>
      )}
      <h2 className="text-5xl font-bold">Create new</h2>
      <form>
        <div className="my-4">
          <input className="shadow appearance-none border border-blue-500 w-5/6 rounded py-2 px-3 mr-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"/>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(e) => {
          e.preventDefault(); 
          newAnecdote()}
        }>create</button>
        </div>
      </form>
    </div>
  )
}

export default App