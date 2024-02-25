import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.sort((a,b) => b.votes - a.votes))
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch({ type: 'VOTE', id: id })
  }

  return (
    <>
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
    </>

  ) 
}

export default AnecdoteList