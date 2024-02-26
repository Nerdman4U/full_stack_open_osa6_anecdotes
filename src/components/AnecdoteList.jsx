import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector(state => {
    //const anecdotes = state.anecdotes
    console.log('AnecdoteList state.filter', state.filter)
    let anecdotes = state.anecdotes
    if (state.filter) {
      anecdotes = state.anecdotes.filter(a => a.content.includes(state.filter))      
    }
    anecdotes = anecdotes.sort((a,b) => b.votes - a.votes)
    return anecdotes
  })

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
            <button onClick={() => dispatch(vote(anecdote))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Vote </button>
          </div>
        </div>
      )}
    </div>
    </>

  ) 
}

export default AnecdoteList